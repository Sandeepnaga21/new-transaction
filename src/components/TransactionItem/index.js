import './index.css'

const TransactionItem = props => {
  const {name, amount, type, id, updateHistoryList} = props

  const onClickDeleteBtn = () => {
    updateHistoryList(id)
  }

  return (
    <li className="history-table" key={id}>
      <p className="history-item">{name}</p>
      <hr className="separator" />
      <p className="history-item">{amount}</p>
      <hr className="separator" />
      <p className="history-item">{type}</p>
      <hr className="separator" />
      <button
        className="button"
        onClick={onClickDeleteBtn}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="img"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
