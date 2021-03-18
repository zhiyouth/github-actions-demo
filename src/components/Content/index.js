import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import HomePage from '../../pages/home';
import CodeOnLinePage from '../../pages/code-online';
import CodeOnLineComponentsPage from '../../pages/code-online-compoents';
import CodeOnLineEnvPage from '../../pages/code-online-env';
import CodeOnLineDataPage from '../../pages/code-online-data';
import ComponentsLibraryPage from '../../pages/components-library';
import DefaultPage from '../../pages/default';
import UserPage from '../../pages/user-page';
const mapComponent = {
  HomePage,
  CodeOnLinePage,
  CodeOnLineComponentsPage,
  CodeOnLineEnvPage,
  CodeOnLineDataPage,
  ComponentsLibraryPage,
  UserPage,
};
class Content extends Component {
  renderCenterPage = () => {
    const { pageHeaders, currentPageIndex } = this.props;
    if (currentPageIndex === -1) {
      return <DefaultPage />;
    }
    const pageName = pageHeaders[currentPageIndex].pageName;
    const ComponentName = mapComponent[pageName];
    return <ComponentName />;
  };
  render () {
    return (
      <div className="content">
        {this.renderCenterPage()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { config } = state;
  const { pageHeaders, currentPageIndex } = config;
  return {
    pageHeaders,
    currentPageIndex,
  };
};
export default connect(mapStateToProps, null)(Content);