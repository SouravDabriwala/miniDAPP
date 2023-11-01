import { useEffect} from "react"

const WriteContract = ({state}) => {
  
  const {contract,web3}   = state

  const writeData = async(e)=>{
    e.preventDefault()
    const data = document.querySelector('#data').value
    console.log(data)
    // const accounts = web3.eth.getAccounts()
    await contract.methods.store(data).send({
          from:"0x18f0121aAB3Aa01B0aa6d37482E75264412f7660"
       })


  }


  return (
    <div>
       <form onSubmit={writeData}>
         <input id="data"></input>
         <button>Submit</button>



       </form>

    </div>
  )
}

export default WriteContract