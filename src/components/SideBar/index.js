import React, { Component } from 'react';
import SideBarItem from './item';
import { CREACTE_NEW_PAGE_BY_PAGE_NAME } from '../../actions';
import './index.less';
import Config from '../../config.json';
import { connect } from 'react-redux';
const { sideBarlist } = Config;
class SidBar extends Component {
  createHomePage = () => {
    const { dispatch, config } = this.props;
    const { isHasHomePage } = config;
    if (isHasHomePage) return;
    dispatch({
      type: CREACTE_NEW_PAGE_BY_PAGE_NAME,
      data: {
        pageName: 'HomePage',
      }
    });
  }
  render () {
    return (
      <div className="side-bar">
        <div
          className="logo"
          onClick={this.createHomePage}
        >
          Low Code
        </div>
        <div className="side-bar__list">
          {
            sideBarlist.map((item, index) => {
              return (
                <SideBarItem
                  key={`side-bar__item_${index}`}
                  item={item}
                  index={index}
                />
              );
            })
          }
        </div>
      </div>
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
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidBar);