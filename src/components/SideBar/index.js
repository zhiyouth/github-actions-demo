import React, { Component } from "react";
import SideBarItem from './item';
import './index.less';
import Config from './config.json';
const { list } = Config;
class SidBar extends Component {
    render () {
        return (
            <div className="side-bar">
                <div className="logo">
                    Low Code
                </div>
                <div className="side-bar__list">
                    {
                        list.map((item, index) => {
                            return (
                                <SideBarItem
                                    key={`side-bar__item_${index}`}
                                    item={item}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
export default SidBar;