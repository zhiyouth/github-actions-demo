import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
class CodeOnLinePage extends Component {
  createNewPage = () => {

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