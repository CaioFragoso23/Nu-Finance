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
            <div className="filler" >
                <input className="input-description transactionDescription" placeholder="Descrição da transação" value={transaction.description} onChange={(event) => setTransaction({...transaction, description: event.target.value})} type="text" required ></input>
                <p className="subtitle">Ex: Compra de roupas</p>
            </div>
            <div className="transactionInfo">
                <div className="filler" >
                    <p>Valor</p>
                    <input className="input-number transactionInputs" placeholder="Valor da transação." value={transaction.value} type="number" onChange={(event) => setTransaction({...transaction, value: parseInt(event.target.value)})} required />
                </div>
                <div className="filler">
                <p>Tipo de transação</p>
                <select className="input-select transactionInputs" onChange={(event) => setTransaction({...transaction, type: event.target.value})} name="tipoPgto" id="tipoPgto" required >
                    <option value="">Selecionar tipo de transação.</option>
                    <option value="entrada">Entrada</option>
                    <option value="saída">Saída</option>
                </select>
                </div>
            </div>
            <button className="button-primary" type="submit">Enviar transação.</button>
        </form>
    )
}

