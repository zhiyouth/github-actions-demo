import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchConfig, SET_CURRENT_SITE } from '../../actions';
import './itemChild.less';

class ItemChild extends Component {
  isActive = () => {
    const { config, index }  = this.props;
    const { currentSite } = config;
    return currentSite[1] === index;
  }
  handleClick = () => {
    const { index, dispatch, config } = this.props;
    const newCurrentSite = config.currentSite;
    newCurrentSite[1] = index;
    dispatch(fetchConfig({
      type: SET_CURRENT_SITE,
      data: {
        currentSite: newCurrentSite,
      }
    }));
  }
  render() {
    const { item } = this.props;
    return (
      <div
        className={`side-bar__item__child ${this.isActive() ? 'active' : ''}`}
        onClick={this.handleClick}
      >
        {item.name}
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
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemChild);
