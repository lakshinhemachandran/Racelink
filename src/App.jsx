import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Races from "./pages/Races"
import Drivers from "./pages/Drivers"
import Teams from "./pages/Teams"
import Search from "./pages/Search"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/races" element={<Races />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
