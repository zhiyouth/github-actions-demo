import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DELETE_HEADERS_BY_INDEX } from '../../actions';
import './item.less';
class PageBarItem extends Component {
  handleClick = () => {
    
  }
  handleClose = () => {
    const { dispatch, index } = this.props;
    dispatch({
      type: DELETE_HEADERS_BY_INDEX,
      data: {
        index: index,
      }
    });
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