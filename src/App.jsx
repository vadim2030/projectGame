// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./scss/style.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormRegistr from './FormRegistr.jsx';
import Layout from './Layout.jsx';
import Login from './Login.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='login' element={<Login />} />
          <Route path="registr" element={<FormRegistr />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App

