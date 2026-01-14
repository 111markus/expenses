import "./Expenses.css";
import ExpensesItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense, index) => (
        <ExpensesItem key={index} data={expense} />
      ))}
    </Card>
  );
};

export default Expenses;
