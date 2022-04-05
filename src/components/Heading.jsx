import React from 'react'
import styled from 'styled-components'
const Head = styled.div`
    width: 100%;
    height: 50vh;
    margin-bottom: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Barlow', sans-serif;
    font-size: 2vw;
    .i{
        color: red;
        font-family: 'Rubik Wet Paint', cursive;
    }
    .v{
        color: blue;
        font-family: 'Rubik Wet Paint', cursive;
        font-size: 3vw;
    }
    .m{
        color: orange;
        font-family: 'Rubik Wet Paint', cursive;
    }
`
function Heading() {
  return (
    <Head>
        <h1>welcome to <span className='i'>I</span><span className='v'>V</span><span className='m'>M</span>: Your one Inventory portal</h1>
    </Head>
  )
}

export default Heading