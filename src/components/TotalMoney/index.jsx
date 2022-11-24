export const TotalMoney = ({listTransactions}) => {
    return(
        <>
        <p> Total: {listTransactions.reduce((previousValue, currentValue) => {return previousValue + currentValue.value}, 0)} </p>
        </>
    )
}