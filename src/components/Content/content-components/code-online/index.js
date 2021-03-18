import React, { Component } from 'react';
import './index.less';
class CodeOnLine extends Component {
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

export default CodeOnLine;