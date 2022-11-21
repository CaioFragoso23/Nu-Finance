import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Form } from './components/Form'
// import { TotalMoney } from './components/totalMoney'

function App() {
  const [count, setCount] = useState(0)
  const [listTransactions, setListTransactions] = useState([
  { description: "Salário recebido", type: "entrada", value: 2500 },
  { description: "Conta de luz", type: "saída", value: -150 }
  ])
     

  return (
    <div className="App container">
      {/* <TotalMoney listTransactions={listTransactions} ></TotalMoney> */}
      <Form listTransactions={listTransactions} setListTransactions={setListTransactions} ></Form>
    </div>
  )
}

export default App
