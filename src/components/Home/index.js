import React from 'react'
import Banner from './Banner'
import MainView from './MainView'
import { useSelector } from 'react-redux'

const Home = () => {
  const appName = useSelector((store) => store.appName)

  return (
    <div className="home-page">
      <Banner appName={appName} />
      <div className="container page">
        <div className="row">
          <MainView />
          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
