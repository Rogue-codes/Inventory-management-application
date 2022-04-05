import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from './Context/Context'

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 2%;
    table{
        width: 100%;
        border-collapse: collapse;
        th{
            height: 8vh;
            font-family: 'Barlow', sans-serif;
        }
        td{
            height: 10vh;
            padding-left: 1%;
            text-align: center;
            font-family: 'Barlow', sans-serif;
        }
        tr{
            border-bottom: 1px solid #ddd;
            &:nth-child(even) {
                background-color: #D6EEEE;
            }
        }
        
    }
`
function Purchased() {
    const {ItemsPurchased} = useContext(AppContext)
  return (
    <Wrap>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Vendor</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    ItemsPurchased.map((item) =>  (
                        <tr>
                            <td><strong>{item.id}</strong></td>
                            <td>{item.itemName}</td>
                            <td><strong>{item.Quantity}</strong></td>
                            <td><strong>₦ {item.price}</strong></td>
                            <td>{item.date}</td>
                            <td>{item.vendor}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </Wrap>
  )
}

export default Purchased