import React from "react"
import _ from "lodash"

import "./content.css"

class Content extends React.Component {
    changeLocation = (event) => {
        let name = event.currentTarget.getAttribute("data-name")
        this.props.changeLocation(_.concat(this.props.currLocation, name))
    }

    renderContent = () => {
        let content = this.props.content
        if (content.type === "file") {
            return <div>{`THIS IS FILE: ${content.name}`}</div>
        } else {
            return _.map(content.children, (child) => (
                <li
                    className="link-text"
                    onClick={this.changeLocation}
                    data-name={child}
                >
                    {child}
                </li>
            ))
        }
    }

    render() {
        return <ul>{this.renderContent()}</ul>
    }
}

export { Content, Content as default }
