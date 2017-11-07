import React from 'react'
import PropTypes from 'prop-types';

/** Component to display a message */
function HelloWorld({message}){
    return <div>Hello {message}</div>
}

HelloWorld.propTypes = {
    /** Message to display */
    message: PropTypes.string
}


export default HelloWorld