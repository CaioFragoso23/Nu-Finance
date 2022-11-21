import "./index.css"
export const Form = (listTransactions, setListTransactions) => {
    return(
        <form className="form" onSubmit={(event) => {setListTransactions(event.preventDefault())}}>
            <input className="input-number" type="number" />
            <input className="input-description" type="text"></input>
            <select className="input-select" name="tipoPgto" id="tipoPgto">
                <option value="entrada">Entrada</option>
                <option value="saída">Saída</option>
            </select>
            <button className="button-primary" type="submit">Enviar transação.</button>
        </form>
    )
}

