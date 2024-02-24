import './index.css'

const DenominationItem = props => {
  const {denominationListDetails, onChangeAmount} = props
  const {value} = denominationListDetails

  const change = () => {
    onChangeAmount(value)
  }

  return (
    <li className="list-container">
      <button type="button" className="denomination-button" onClick={change}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
