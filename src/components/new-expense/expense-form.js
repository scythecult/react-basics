import React, { useState } from "react";
import { createExpense } from "../../utils";

import "./expense-form.css";

const initialState = { title: "", amount: "", date: "" };

const ExpenseForm = (props) => {
  const [expense, setExpense] = useState(initialState);
  const { title, amount, date } = expense;
  const { onUpdateExpenses, onButtonClick } = props;

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    onUpdateExpenses((state) => [...state, createExpense(expense)]);

    setExpense(initialState);
    onButtonClick(false);
  };

  return (
    <form className="expense-form" onSubmit={onFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={(evt) =>
              setExpense((state) => ({ ...state, title: evt.target.value }))
            }
            type={"text"}
            value={title}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={(evt) =>
              setExpense((state) => ({ ...state, amount: Number(evt.target.value) }))
            }
            type={"number"}
            min={"0.01"}
            step={"0.01"}
            value={amount}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={(evt) =>
              setExpense((state) => ({ ...state, date: evt.target.value }))
            }
            type={"date"}
            min={"2019-01-01"}
            max={"2022-12-31"}
            value={date}
            required
          />
        </div>
        <div className="new-expense__actions">
          <button className="button" type="submit">
            Add expense
          </button>
          <button className="button" type="button" onClick={() => onButtonClick(false)}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export { ExpenseForm };
