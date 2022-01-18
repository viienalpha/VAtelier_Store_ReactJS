import React from 'react'
import PropTypes from 'prop-types'

const InfoCard = (props) => {
    return (
        <div className="card-info">
            <div className="card-info__icon">
                <i className={props.icon}></i>
            </div>
            <div className="card-info__info">
                <div className="card-info__info__name">
                    {props.name}
                </div>
                <div className="card-info__info__description">
                    {props.description}
                </div>
            </div>
        </div>
    )
}

InfoCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
export default InfoCard
