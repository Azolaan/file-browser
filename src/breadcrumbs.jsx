import React from "react"
import _ from "lodash"
import Breadcrumb from "react-bootstrap/Breadcrumb"

class Breadcrumbs extends React.Component {
    changeLocation = (event) => {
        if (!this.props.loading) {
            let index = _.toNumber(
                event.currentTarget.getAttribute("data-index")
            )
            if (index + 1 < this.props.currLocation.length) {
                this.props.changeLocation(
                    _.take(this.props.currLocation, index + 1)
                )
            }
        }
    }

    renderNavigationList = () => {
        let path = this.props.currLocation
        return _.map(path, (dir, index) => (
            <Breadcrumb.Item
                key={index}
                onClick={this.changeLocation}
                data-index={index}
            >
                {dir}
            </Breadcrumb.Item>
        ))
    }

    render() {
        return <Breadcrumb>{this.renderNavigationList()}</Breadcrumb>
    }
}

export { Breadcrumbs, Breadcrumbs as default }
