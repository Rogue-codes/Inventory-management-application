import { createContext, useReducer } from "react"
import {nanoid} from 'nanoid'

const AppReducer = (state, action) => {
    switch (action.type){
        case 'ADD_ITEM':
            return{
                ...state,
                ItemsPurchased:  [...state.ItemsPurchased, action.payload]
            }
        default: 
        return{
            state
        } 
    }
}

const InitialState = {
    TotalItems:0,
    TotalPrice: 0,
    ItemsPurchased:[
        {
            id:nanoid(),
            itemName: 'Mikano Generator',
            Quantity: 5,
            price: 15000,
            date: '23/4/2022',
            vendor: 'ade supply company',
            status: 'recieved'
        }
    ]
}

export const AppContext = createContext()

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer,InitialState)
    return(
        <AppContext.Provider value={{
            TotalItems : state.TotalItems,
            TotalPrice : state.TotalPrice,
            ItemsPurchased: state.ItemsPurchased,
            dispatch
        }}>
            {props.children}
        </AppContext.Provider>
    )
}