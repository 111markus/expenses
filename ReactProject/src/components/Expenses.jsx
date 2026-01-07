import "./Expenses.css";
import ExpensesItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((expense, index) => (
        <ExpensesItem key={index} data={expense} />
      ))}
    </div>
  );
};

export default Expenses;
