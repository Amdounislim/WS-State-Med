import React from 'react'
import propTypes from "prop-propTypes"

const Profile = (props) => {
    return (
        <div>
            <h1>{props.description}</h1>
        </div>
    )
}

Profile.defaultProps={
    description:"no desc"
}

Profile.propTypes={
    description: propTypes.string
}


export default Profile
