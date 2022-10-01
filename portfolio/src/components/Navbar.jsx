import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavbarContainer = styled.nav`
    background-color: #c0ffee;
    padding: 5px;
    
    ul {
        display: flex;
        justify-content: space-evenly;
    }

    li {
        list-style: none;
    }

    
`

const Navbar = () => {
  

  return (
    <NavbarContainer>
        <ul>
            <li> <Link to='/'> Home </Link></li>
            <li> <Link to='/about'> About Me </Link></li>
            <li> <Link to='/resume'>Resume </Link></li>
            <li> <Link to='/contact'> Contact info  </Link></li>
            <li> <Link to='/projects'> Projects </Link></li>
          
        </ul>
    </NavbarContainer>
  )
}

export default Navbar