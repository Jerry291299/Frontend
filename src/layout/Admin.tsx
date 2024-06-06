import React from 'react'
import Navbar from '../components/admin/Navbar'
import { Outlet } from 'react-router-dom'

type Props = {}

const Admin = (props: Props) => {
  return (
    <>
    <div className='flex justify-between'>
    <Navbar/>
    <Outlet/>
    </div>
    </>
)
}

export default Admin