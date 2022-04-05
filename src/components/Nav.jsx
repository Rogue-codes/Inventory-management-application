import React from 'react'
import styled from 'styled-components'  
import {CgDarkMode} from 'react-icons/cg'
const Navi = styled.nav`
    width: 100%;
    height: 14vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
    border-bottom: 1px solid lightgrey;
    background-color: ${props => props.bg};
    color: ${props => props.cl};
    margin-bottom: 5%;
    font-family: 'Barlow', sans-serif;
    transition: all .5s linear;
`
const Logo = styled.div`
    width: 50px;
    height: 50px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Text = styled.p`
    font-size: 2vw;
`
const Btn = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
`
function Nav({SwitchTheme, darkTheme}) {
  return (
    <Navi bg={darkTheme ? '#202124' : 'white'} cl={darkTheme ? '#fff' : '#202124'}>
        <Logo>
            <img src="https://cdn.dribbble.com/users/4118978/screenshots/11019450/media/fed56c1353c1bd7f8156241a60074d44.png?compress=1&resize=1200x900&vertical=top" alt="" srcset="" />
        </Logo>

        <Text>Welcome to IVM</Text>

        <Btn onClick={SwitchTheme}><CgDarkMode/></Btn>
        
    </Navi>
  )
}

export default Nav