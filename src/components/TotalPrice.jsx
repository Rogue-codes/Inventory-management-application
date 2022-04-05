import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from './Context/Context'

const Card = styled.div`
    width: 40%;
    height: 20vh;
    background-color: #3636d9;
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
function TotalPrice() {
    const {ItemsPurchased} = useContext(AppContext)

    const TotalPrice = ItemsPurchased.reduce((tot, item) => {
        return(tot = tot + item.price)
    },0)
  return (
    <Card>
        <Total>Total Price: ₦ {TotalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Total>
    </Card>
  )
}

export default TotalPrice