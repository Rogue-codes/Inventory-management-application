import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AppContext } from './Context/Context'
import {nanoid} from 'nanoid'

const Form = styled.form`
    width: 100%;
    height: auto;
    margin-bottom: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
    input{
        font-family: 'Barlow', sans-serif;
        width: 18%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        height: 6vh;
        padding-left: 1%;
        border: 1px solid lightgrey;
        border-radius: 5px;
        &:focus{
            outline: none;
        }
    }
    select{
        font-family: 'Barlow', sans-serif;
        width: 15%;
        height: 6vh;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding-left: 2%;
        border: 1px solid lightgrey;
        border-radius: 5px;
    }
    button{
        font-family: 'Barlow', sans-serif;
        width: 10%;
        height: 6vh;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border: none;
        background: red;
        color: white;
        opacity: .8;
        border-radius: 5px;
        cursor: pointer;
        &:hover{
            opacity: 1;
        }
    }
`
function AddItems() {
    const [name,setName] = useState('')
    const [quantity,setQuantity] = useState('')
    const [price,setPrice] = useState('')
    const [vendor,setVendor] = useState('')
    const [status,setStatus] = useState('')


    const {dispatch} = useContext(AppContext)



    const handleSubmit = (e) => {
        e.preventDefault()

        if( name === '' || quantity === '' || price=== '' || vendor === '' || status === ''){
            alert('All fields must be filled')
            return
        }

        console.log(name,quantity,price,vendor,status)
        setName('')
        setQuantity('')
        setPrice('')
        setVendor('')
        setStatus('')
 
        const date = new Date()

        const ItemsPurchased = {
            id:nanoid(),
            itemName: name,
            Quantity: parseInt(quantity),
            price: parseInt(price * quantity),
            date: date.toLocaleDateString(),
            vendor: vendor,
            status: status
        }

        dispatch({
            type: 'ADD_ITEM',
            payload:ItemsPurchased,
        })
        
    }

  return (
    <Form onSubmit={handleSubmit}>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='item name'/>

        <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder='quantity' />

        <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='price' />

        <select name="" id="" value={vendor} onChange={(e)=>setVendor(e.target.value)}>
            <option value="">--select a vendor--</option>
            <option value="Ade supply Company">Ade supply Co.</option>
            <option value="Denver Wholesales">Denver Wholesales</option>
            <option value="Contosso Europe">Contosso Europe</option>
        </select>
        
        <select name="" id="" value={status} onChange={(e)=>setStatus(e.target.value)}>
            <option value="">--select status--</option>
            <option value="Recieved">Recieved</option>
            <option value="Shipped">Shipped</option>
            <option value="Declined">Declined</option>
        </select>

        <button>save</button>
    </Form>
  )
}

export default AddItems