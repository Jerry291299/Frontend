import React from 'react'
import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'
import Banner from '../components/Banner'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Home