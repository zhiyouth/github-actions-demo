import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
const mapCurrentSiteToCenterComponent = (currentSite) => {
  const currentSiteStr = currentSite.toString();
  switch (currentSiteStr) {
  case '0': {
    return '在线开发';
  }
  case '0,0': {
    return '在线开发/组件开发';
  }
  case '0,1': {
    return '在线开发/环境变量';
  }
  case '0,2': {
    return '在线开发/数据绑定试图';
  }
  case '1': {
    return '组件仓库';
  }
  case '1,0': {
    return '开关组件';
  }
  default: {
    return '首页';
  }
  }
  
};
class Content extends Component {
  render () {
    const { config } = this.props;
    const { currentSite } = config;
    return (
      <div className="content">
        {mapCurrentSiteToCenterComponent(currentSite)}
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
export default connect(mapStateToProps, null)(Content);