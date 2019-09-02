import React from 'react'
import PropTypes from 'prop-types'

const App = ({
  counter,
  handleIncrement,
  handleDecrement,
  handleIncrementIfOdd,
  handleIncrementAsync
}) => (
  <div>
    <h1>redux-saga demo app</h1>
    <p>
      Clicked: {counter} times{' '}
      <button className="increment" onClick={handleIncrement}>
        +
      </button>{' '}
      <button className="decrement" onClick={handleDecrement}>
        -
      </button>{' '}
      <button className="incrementIfOdd" onClick={handleIncrementIfOdd}>
        Increment if odd
      </button>{' '}
      <button className="incrementAsync" onClick={handleIncrementAsync}>
        Increment async
      </button>
    </p>
  </div>
)

App.propTypes = {
  counter: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleIncrementIfOdd: PropTypes.func.isRequired,
  handleIncrementAsync: PropTypes.func.isRequired
}

export default App
