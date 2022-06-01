import React, { FC } from 'react'
import Navbar from '../components/Navbar'

type MyComponentProps = React.PropsWithChildren<{}>;

const Layout = ({ children }: MyComponentProps) => {
  return (
    <>
        <Navbar/>
        <div className="flex justify-center items-center flex-col p-5 pt-32 text-center text-xl">
            {children}  
        </div>  
    </>
  )
}

export default Layout