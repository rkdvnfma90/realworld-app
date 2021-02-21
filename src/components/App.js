import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import Home from './Home'

const App = () => {
  // connect를 사용한 HOC를 사용하지 않아도 됨 (mapStateToProps)
  const appName = useSelector((state) => state.appName)

  return (
    <div>
      <Header appName={appName} />
      <Home />
    </div>
  )
}

export default App
