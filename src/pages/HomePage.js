import React, { useContext } from 'react'

import { Header } from '../layout/Header'
import { SideBar } from '../layout/SideBar'
import { DevContext } from '../utility/DevContext'

export const HomePage = () => {
  const context = useContext(DevContext)

  return (
    <>
      <Header />
      <SideBar context={context} />
      <main className="home-page">
        <div className="some-content">
          <p>some content</p>
        </div>
      </main>
    </>
  )
}
