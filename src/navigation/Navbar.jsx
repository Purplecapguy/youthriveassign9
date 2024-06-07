import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
            <a href="#">About me</a>
                        <a href="#">Skills</a>
                        <a href="#">Portfolio</a>
                        <a class="contactme" href="#">CONTACT ME</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar