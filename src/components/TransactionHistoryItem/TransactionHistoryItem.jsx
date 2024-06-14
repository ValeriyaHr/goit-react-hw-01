//import TransectionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
//import css from "../TransactionHistory/TransactionHistory.module.css";


export default function TransectionHistoryItem({
  transaction: { id, type, amount, currency },
}) {
 
  return (
    <tr><td>{type}</td><td>{amount}</td><td>{currency}</td></tr>
  );
}

 
//export default TransectionHistory;