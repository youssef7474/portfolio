import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layouts/Layout'
import HomePage from '../features/Home/Pages/HomePage'

const Navigations = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path="" element={<HomePage />} />
        </Route>
    </Routes>
  )
}

export default Navigations
