import React from 'react'
import PropTypes from 'prop-types'
const Helmet = props => {
    document.title="BeTran - " + props.title
    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.prototype={
    title: PropTypes.string.isRequired

}

export default Helmet
