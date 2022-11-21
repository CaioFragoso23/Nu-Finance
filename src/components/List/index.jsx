export const List = (listTransactions) => {
    return(
        <ul>
            {listTransactions.map((transaction, index) => <Card transaction={transaction} key={index} />)}
        </ul>
    )
}


export const Card = (transaction, key) => {
    return(
        <li>
            {transaction}
            {key}
        </li>
    )
}
