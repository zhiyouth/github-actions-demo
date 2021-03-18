import React, { Component } from 'react';
import './item.less';
class PageBarItem extends Component {
  handleClose = () => {
    console.log('点击了关闭');
  }
  render () {
    const { item } = this.props;
    return (
      <div
        className="pages-bar__item" 
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {item.name}
        <div
          className="close"
          onClick={this.handleClose}
        />
      </div>
    );
  }
}
export default PageBarItem;