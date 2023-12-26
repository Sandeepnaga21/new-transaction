import './index.css'

const MoneyDetails = props => {
  const {money} = props
  const income = money
  const balance = income - expenses

  return (
    <div className="Money-details">
      <div className="balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="img"
          alt="balance"
        />
        <div>
          <p className="heading">Your Balance</p>
          <p className="rupees" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="img"
          alt="income"
        />
        <div>
          <p className="heading">Your Income</p>
          <p className="rupees" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="img"
          alt="expenses"
        />
        <div>
          <p className="heading">Your Expenses</p>
          <p className="rupees" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
