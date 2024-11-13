import React from 'react'

type Props = {
    children:React.ReactNode
}

const LayoutAuthenticated = ({children}: Props) => {
  return (
    <div className='container h-screen flex items-center justify-center'>{children}</div>
  )
}

export default LayoutAuthenticated