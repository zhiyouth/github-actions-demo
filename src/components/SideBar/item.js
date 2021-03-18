import React, { Component } from 'react';
import { connect } from 'react-redux';
import './item.less';
import { fetchConfig, SET_CURRENT_SITE, CREACTE_NEW_PAGE_BY_PAGE_NAME } from '../../actions';
import ItemChild from './itemChild';
import Config from '../../config.json';
const { sideBarlist } = Config;
class SidBarItem extends Component {
  isActive = () => {
    const { config, index }  = this.props;
    const { currentSite } = config;
    return currentSite[0] === index;
  }
  handleClick = () => {
    const { index, dispatch, } = this.props;
    if (this.isActive()) {
      const pageName = sideBarlist[index].pageName;
      dispatch(fetchConfig({
        type: CREACTE_NEW_PAGE_BY_PAGE_NAME,
        data: {
          pageName,
        }
      }));
    }
    dispatch(fetchConfig({
      type: SET_CURRENT_SITE,
      data: {
        currentSite: [index],
      }
    }));
  }
  render () {
    const { item } = this.props;
    return (
      <React.Fragment>
        <div className={`side-bar__item ${this.isActive() ? 'active' : ''}`} 
          onClick={this.handleClick}
        >
          {item.name}
        </div>
        {
          this.isActive() && (
            <div className="side-bar__item__children">
              {
                item.children.map((childrenItem, childrenIndex) => {
                  return (
                    <ItemChild
                      key={`side-bar__item__children__item_${childrenIndex}`}
                      item={childrenItem}
                      index={childrenIndex}
                    />
                  );
                })
              }
            </div>
          )
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const {config} = state;
  return {
    config,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidBarItem);