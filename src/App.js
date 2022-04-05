import { useState } from "react";
import styled from "styled-components";
import AddItems from "./components/AddItems";
import { AppProvider } from "./components/Context/Context";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Purchased from "./components/Purchased";
import TotalComodities from "./components/TotalComodities";
import TotalPrice from "./components/TotalPrice";

const Cont = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.bg} ;
  color: ${props => props.cl};
  transition: all .5s linear;
`
const Wrapper =styled.div`
  width: 100%;
  padding: 2%;
  height: 30vh;
  display: flex;
  margin-bottom: 5%;
  justify-content: space-between;
  align-items: flex-start;
`
function App() {
  const [darkTheme, setDraktheme] = useState(false)

  const SwitchTheme = () => {
    setDraktheme(!darkTheme)
  }
  return (
    <AppProvider>
      <Cont className="App" bg={darkTheme ? '#202124' : '#f0f8ff'} cl={darkTheme ? '#f0f8ff' : '#000'}>
        <Nav SwitchTheme={SwitchTheme} darkTheme={darkTheme}/>
        <Heading/>
        <Wrapper>
          <TotalComodities/>
          <TotalPrice/>
        </Wrapper>
        <AddItems/>
        <Purchased/>
      </Cont>
    </AppProvider>
  );
}

export default App;
