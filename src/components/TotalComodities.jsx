import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from './Context/Context'
const Cards = styled.div`
    width: 40%;
    height: 20vh;
    background-color: orange;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Total = styled.p`
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
`
function TotalComodities() {
    const {ItemsPurchased} = useContext(AppContext)

    const TotalItems = ItemsPurchased.reduce((tott,ittems)=>{
        return( tott = tott + ittems.Quantity)
    },0)
  return (
    <Cards>
        <Total>Total number of Assets purchased: {TotalItems.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Total>
    </Cards>
  )
}

export default TotalComodities