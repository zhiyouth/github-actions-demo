import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageBarItem from './item';
import './index.less';
class PagesBar extends Component {
  renderPageHeaders = () => {
    const { pageHeaders } = this.props;
    return pageHeaders.map((item, index) => (
      <PageBarItem
        key={`page-bar__item-${index}`}
        item={item}
      />
    ));
  }
  render () {
    return (
      <div className="pages-bar">
        <div className="pages-bar__wrapper">
          {this.renderPageHeaders()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ config }) => {
  const { pageHeaders } = config;
  return {
    pageHeaders,
  };
};
export default connect(mapStateToProps, null)(PagesBar);