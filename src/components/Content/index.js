import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import Config from '../../config.json';
import CodeOnLine from './content-components/code-online';
import CodeOnLineComponents from './content-components/code-online-compoents';
import CodeOnLineEnv from './content-components/code-online-env';
import CodeOnLineData from './content-components/code-online-data';
import ComponentsLibrary from './content-components/components-library';
const mapComponent = {
  CodeOnLine,
  CodeOnLineComponents,
  CodeOnLineEnv,
  CodeOnLineData,
  ComponentsLibrary,
};
const { sideBarlist } = Config;
const mapCurrentSiteToCenterComponent = (currentSite) => {
  const currentSiteStr = currentSite.toString();
  switch (currentSiteStr) {
  case '0': {
    const ComponentName = mapComponent[sideBarlist[0]['componentName']];
    return <ComponentName />;
  }
  case '0,0': {
    const ComponentName = mapComponent[sideBarlist[0].children[0]['componentName']];
    return <ComponentName />;
  }
  case '0,1': {
    const ComponentName = mapComponent[sideBarlist[0].children[1]['componentName']];
    return <ComponentName />;
  }
  case '0,2': {
    const ComponentName = mapComponent[sideBarlist[0].children[2]['componentName']];
    return <ComponentName />;
  }  
  case '': {
    return '首页';
  }
  default: {
    const ComponentName = mapComponent[sideBarlist[1]['componentName']];
    return <ComponentName />;
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