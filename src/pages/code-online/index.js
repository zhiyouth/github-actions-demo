import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import { CREACTE_NEW_PAGE_BY_PAGE_NAME, fetchConfig } from '../../actions';
class CodeOnLinePage extends Component {
  createNewPage = () => {
    const { dispatch } = this.props;
    dispatch(fetchConfig({
      type: CREACTE_NEW_PAGE_BY_PAGE_NAME,
      data: {
        userPageName: '我的新建页面',
        pageName: 'UserPage',
      }
    }));
  }
  render() {
    return (
      <div className="code-online">
        <div
          className="create-new-page"
          onClick={this.createNewPage}
        >
          新建页面
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ config }) => {
  const { pageHeaders, currentPageIndex } = config;
  return {
    pageHeaders,
    currentPageIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeOnLinePage);