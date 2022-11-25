import "./index.css"

export const TotalMoney = ({listTransactions}) => {
    return(
        <div className="totalMoney">
            <div className="value" >
                <h2>Valor Total:</h2>
                <p className="primary">R$: {listTransactions.reduce((previousValue, currentValue) => {return previousValue + currentValue.value}, 0)}</p>
            </div>
        </div>
    )
}