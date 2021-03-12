import React, { Component } from "react";
import './item.less';
class SidBarItem extends Component {
  handleClick = () => {
    const { item } = this.props;
    if (item.children <= 1) {

    }
  }
    render () {
        const { item } = this.props;
        return (
            <div className="side-bar__item" 
                // onClick={handleClick}
            >
                {item.name}
            </div>
        );
    }
}
export default SidBarItem;