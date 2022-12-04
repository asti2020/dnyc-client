import React from 'react'

function Greeting(){
    return (
        <div>
            <h1>Thank You!</h1>
            <button onClick={this.props.history.goBack}>Go Back</button>
        </div>
    )
}

Greeting.propTypes = {
  name: React.PropTypes.string
}

Greeting.defaultProps = {
  name: 'John'
}

export default Greeting

