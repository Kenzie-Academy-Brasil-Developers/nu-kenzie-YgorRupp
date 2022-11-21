import React from 'react'
import "./styles.css"
import logoNuKenzie from "../../assets/logoDash.svg"

const Header = ({setLogin}) => {
  return (
    <header>
        <img src={logoNuKenzie} alt="" />
        <button onClick={() => setLogin(false)}>Inicio</button>
    </header>
  )
}

export default Header