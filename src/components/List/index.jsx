import "./index.css";

export const Card = ({ handleTransaction, transaction, index }) => {
  if (transaction.type === "entrada") {
    return (
      <li className="card" key={index}>
        <div className="entryCard"></div>
        <div className="cardInfo">
            <h1>{transaction.description}</h1>
            <p>R$:{transaction.value} </p>
            <button
            className="button-exclude"
            onClick={() => handleTransaction(transaction)}
            >
            Excluir
            </button>
        </div>
      </li>
    );
  } else if (transaction.type === "saída") {
    return (
      <li className="card" key={index}>
        <div className="exitCard"></div>
        <div className="cardInfo">

        <h1>{transaction.description}</h1>
        <p>R$:{transaction.value} </p>
        <button
          className="button-exclude"
          onClick={() => handleTransaction(transaction)}
        >
          Excluir
        </button>
        </div>
      </li>
    );
  }
};

export const List = ({
  listValue,
  listTransactions,
  setListTransactions,
  setListValue,
}) => {
  function handleTransaction(finishedTransaction) {
    let remove = listTransactions.filter(
      (transaction) => transaction !== finishedTransaction
    );
    setListValue(remove);
    setListTransactions(remove);
  }
  return (
    <ul className="list">
      {listValue.map((transaction, index) => (
        <Card
          transaction={transaction}
          handleTransaction={handleTransaction}
          key={index}
        />
      ))}
    </ul>
  );
};
