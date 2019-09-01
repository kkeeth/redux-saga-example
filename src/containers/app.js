import React, { Component } from 'react'
import { connect } from 'react-redux'
import App from '../components/App'
import { increment, decrement, incrementIfOdd, incrementAsync } from '../actions'

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () => {
      dispatch(increment())
    },
    handleDecrement: () => {
      dispatch(decrement())
    },
    handleIncrementIfOdd: () => {
      dispatch(incrementIfOdd())
    },
    handleIncrementAsync: () => {
      dispatch(incrementAsync())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
