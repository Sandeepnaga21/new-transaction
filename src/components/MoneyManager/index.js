import {Componemt} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Componemt {
  state = {
    historyList: [],
    name: '',
    amount: '',
    transactionType: 'Income',
    addAmount: 0,
  }

  updateHistoryList = id => {
    const {historyList} = this.state
    this.setState(prevState => ({
      historyList: prevState.historyList.filter(eachOne => {
        if (id === eachOne.id) {
          return [historyList.delete(eachOne)]
        }
        return eachOne
      }),
    }))
  }

  onAddTransaction = () => {
    const {name, amount, type} = this.state
    const newHistory = {
      id: uuidv4(),
      name,
      amount,
      type,
      isAdd: false,
    }
    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      name: '',
      amount: '',
    }))
  }

  onChangeTitle = event => ({name: event.target.value})

  onChangeAmount = event => ({amount: event.target.value})

  onChangeSelectedType = event => ({type: event.target.value})

  render() {
    const {historyList, addAmount} = this.state

    return (
      <div className="app-container">
        <div className="profile-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="about">
            Welcome back to your
            <span className="highlight">Money Manager</span>
          </p>
        </div>

        <ul className="Money-details">
          <MoneyDetails money={addAmount} />
        </ul>

        <div className="inputs-container">
          <div className="transactons">
            <h1 className="heading">Add Transactons</h1>
            <label htmlFor="title">TITLE</label>
            <input
              id="title"
              className="input"
              type="text"
              onChange={this.onChangeTitle}
            />
            <label htmlFor="amount">AMOUNT</label>
            <input
              id="amount"
              className="input"
              type="text"
              onChange={this.onChangeAmount}
            />
            <label htmlFor="type">TYPE</label>
            <select
              id="type"
              className="input"
              onChange={this.onChangeSelectedType}
            >
              {transactionTypeOptions.map(eachType => (
                <option key={eachType.optionId}>{eachType.displayText}</option>
              ))}
            </select>
            <button className="button" onClick={this.onAddTransaction}>
              Add
            </button>
          </div>

          <div className="history-container">
            <h1 className="heading">History</h1>
            <ul className="history-table">
              <li className="table-header">
                <p className="table-header-cell">Title</p>
                <hr className="separator" />
                <p className="table-header-cell">Amount</p>
                <hr className="separator" />
                <p className="table-header-cell">Type</p>
              </li>
              <TransactionItem
                historyList={historyList}
                updateHistoryList={this.updateHistoryList}
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
