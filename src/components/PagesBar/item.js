import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DELETE_HEADERS_BY_INDEX, CHANGE_HEADERS_BY_INDEX, fetchConfig } from '../../actions';
import './item.less';
class PageBarItem extends Component {
  handleClick = () => {
    const { dispatch, index } = this.props;
    dispatch(fetchConfig({
      type: CHANGE_HEADERS_BY_INDEX,
      data: {
        index: index,
      }
    }));
  }
  handleClose = (e) => {
    // 阻止冒泡
    e.stopPropagation();
    const { dispatch, index } = this.props;
    dispatch(fetchConfig({
      type: DELETE_HEADERS_BY_INDEX,
      data: {
        index: index,
      }
    }));
  }
  render () {
    const { item } = this.props;
    return (
      <div
        className={`${item.active ? 'active': ''} pages-bar__item`} 
        onClick={this.handleClick}
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
const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageBarItem);