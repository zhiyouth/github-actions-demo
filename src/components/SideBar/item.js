import React, { Component } from "react";
import './item.less';
class SidBarItem extends Component {
    render () {
        const { item } = this.props;
        return (
            <div className="side-bar__item">
                {item.name}
            </div>
        );
    }
}
export default SidBarItem;