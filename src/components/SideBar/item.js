import React, { Component } from "react";
import { connect } from "react-redux";
import './item.less';
import { fetchConfig, SET_CURRENT_SITE } from '../../actions';
class SidBarItem extends Component {
  isActive = () => {
    const { config, index }  = this.props;
    const { currentSite } = config;
    return currentSite[0] === index;
  }
  handleClick = () => {
    const { index, dispatch, } = this.props;
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
        <div className={`side-bar__item ${this.isActive() ? 'active' : ''}`} 
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
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SidBarItem);