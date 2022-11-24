import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Form } from './components/Form'
import { List } from './components/List'
import { TotalMoney } from './components/TotalMoney'
import { HomePage } from './components/HomePage'
import { FilterButtons } from './components/Filter'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [listTransactions, setListTransactions] = useState([
  { description: "Salário recebido", type: "entrada", value: 2500 },
  { description: "Conta de luz", type: "saída", value: -150 }
  ])
  const [listValue, setListValue] = useState(listTransactions)
  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }


  const FilterEntries = () => {
    let entradas = listTransactions.filter((transaction) => transaction.type === "entrada")
    setListValue(entradas)
  }

  const FilterExits = () => {
    let saidas = listTransactions.filter((transaction) => transaction.type === "saída")
    setListValue(saidas)
  }

  const ShowAll = () => {
    setListValue(listTransactions)
  }

  return (

      <HomePage isLoggedIn={isLoggedIn} login={login} logout={logout} >
        <div className='App'>
          <div className='centralize'>
            <TotalMoney listTransactions={listValue} ></TotalMoney>
            <Form listTransactions={listTransactions} setListTransactions={setListTransactions} listValue={listValue} setListValue={setListValue} ></Form>
          </div>
          <div className='centralize'>
            <FilterButtons ShowAll={ShowAll} FilterEntries={FilterEntries} FilterExits={FilterExits} ></FilterButtons>
            <List listValue={listValue} listTransactions={listTransactions} setListTransactions={setListTransactions} setListValue={setListValue}  ></List>
          </div>
        </div>
      </HomePage>
  )
}

export default App
