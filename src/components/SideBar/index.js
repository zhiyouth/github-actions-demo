import React, { Component } from 'react';
import SideBarItem from './item';
import './index.less';
import Config from '../../config.json';
import { connect } from 'react-redux';
const { sideBarlist } = Config;
class SidBar extends Component {

  render () {
    return (
      <div className="side-bar">
        <div className="logo">
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

export default connect(mapStateToProps, null)(SidBar);