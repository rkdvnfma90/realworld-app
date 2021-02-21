import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  // connect를 사용한 HOC를 사용하지 않아도 됨 (mapStateToProps)
  const appName = useSelector((state) => state.appName)

  return <div>{appName}</div>
}

export default App
