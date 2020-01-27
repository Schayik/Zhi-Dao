import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import MenuIcon from '../icons/menu.js'

const Menu = ({ links }) => {

  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    isOpen
      ? document.body.style.overflow = "auto"
      : document.body.style.overflow = "hidden"
    
    setOpen(!isOpen)
  }

  return (
    <StyledMenu open={isOpen}>
      <button
        onClick={handleClick}
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls="menu" 
      >
        <MenuIcon />
      </button>
      <ul className={isOpen ? 'open' : 'closed'}>
        {links.map(link => (
          <li key={link.link}>
            <Link onClick={handleClick} to={link.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </StyledMenu>
  )
}

export default Menu

const StyledMenu = styled.div`

  flex: 1;
  display: flex;
  align-items: center;
  /* justify-content: center; */

  display: none;
  @media (max-width: ${p => p.theme.media.large}px) {
    display: flex;
  }

  button {
    position: relative;
    height: 2.5rem;
    max-width: 2.5rem;
    width: 100%;

    svg {
      position: absolute;
      z-index: 3;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      stroke: ${p => p.open ? p.theme.colors.white : p.theme.colors.black};
      fill: ${p => p.open ? p.theme.colors.white : p.theme.colors.black};
    }
  }

  ul {
    position: fixed;
    z-index: 2;

    top: 0;
    bottom: 0;
    left: 0;

    padding: 2.5rem;
    padding-top: ${p => p.theme.navbar.height};

    @media (max-width: ${p => p.theme.media.small}px) {
      padding: 1.25rem;
      padding-top: ${p => p.theme.navbar.height};
    }

    background-color: ${p => p.theme.colors.red};

    transition: 0.3s ease-out transform;

    &.closed {
      transform: translateX(-100%);
    }
        

    li {
      margin-top: 2.5rem;
      a {
        color: ${p => p.theme.colors.white};
        font-size: 1.25rem;
      }
    }
  }



`