
import React from 'react'
import LandingPageNavBar from './_components/navbar'

type Props = {
    children:React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div>
        <LandingPageNavBar/>
        {children}
        </div>
  )
}

export default Layout