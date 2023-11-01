import {useEffect,useState} from 'react'
import Web3 from 'web3'
import ReadContract from './components/ReadContract'
import WriteContract from './components/WriteContract'
import abi from "./ABI/abi.json"
import './App.css'

function App() {

  const [state,setState] = useState({web:null,contract:null})
    
  useEffect(()=>{
    const template = async()=>{
      let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
      // const accounts = await web3.eth.getAccounts();
      const contractAddress = "0xaD4049edE9e50708F6E4B6Ce49D80283E5e7a82a"
      const contractInstance = new web3.eth.Contract(abi,contractAddress)
      setState({web3:web3,contract:contractInstance})
      console.log(contractInstance)

      
    }
    template()
  },[])

  return (
    <>
      <ReadContract state={state}/>
      <WriteContract state={state}/>
    </>
  )
}

export default App
