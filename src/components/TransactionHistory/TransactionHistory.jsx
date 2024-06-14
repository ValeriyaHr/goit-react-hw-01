import TransectionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import css from "./TransactionHistory.module.css";

const TransectionHistory = ({ items }) => {
  return (
    <table>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tlist}>
        {items.map((item) => {
          return (
            <TransectionHistoryItem 
              key={item.id} 
              transaction={item} 
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransectionHistory;
