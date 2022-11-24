import { useState } from "react"
import "./index.css"

export const Form = ({listTransactions, setListTransactions, listValue, setListValue}) => {
    const [transaction, setTransaction] = useState({
        value: "",
        description: "",
        type: ""
    });


    return(
        <form className="form" onSubmit={(event) => {event.preventDefault() 
        setListTransactions([...listTransactions, transaction])
        setListValue([...listValue, transaction])}} >
            <input className="input-number" value={transaction.value} type="number" onChange={(event) => setTransaction({...transaction, value: event.target.value})} />
            <input className="input-description" value={transaction.description} onChange={(event) => setTransaction({...transaction, description: event.target.value})} type="text"></input>
            <select className="input-select" value={transaction.type} onChange={(event) => setTransaction({...transaction, type: event.target.value})} name="tipoPgto" id="tipoPgto">
                <option value="entrada">Entrada</option>
                <option value="saída">Saída</option>
            </select>
            <button className="button-primary" type="submit">Enviar transação.</button>
        </form>
    )
}

