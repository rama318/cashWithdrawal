import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    rupees: 2000,
    balance: true,
  }

  onChangeAmount = value => {
    const {rupees} = this.state
    if (rupees - value >= 0) {
      this.setState(prevState => ({rupees: prevState.rupees - value}))
      this.setState({balance: true})
    } else {
      this.setState({balance: false})
    }
  }

  render() {
    const {rupees, balance} = this.state
    const {denominationsList} = this.props
    const text = balance ? null : (
      <span className="error">* Insufficient Funds</span>
    )
    const waringText =
      rupees >= 50 && !balance ? (
        <span className="warning">Choose another Denomination</span>
      ) : null

    return (
      <div className="cash-withdrawal-container">
        <div className="sub-container">
          <div className="profile-container">
            <div className="initial-container">
              <p className="heading">S</p>
            </div>
            <p className="user-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-description">Your Balance</p>
            <div className="rupees-container">
              <p className="rupees-description">{rupees}</p>
              <p className="">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-description">Withdraw</p>
            <p className="rupees-description">CHOOSE SUM (IN RUPEES)</p>
            <ul className="order-container">
              {denominationsList.map(eachValue => (
                <DenominationItem
                  key={eachValue.id}
                  denominationListDetails={eachValue}
                  onChangeAmount={this.onChangeAmount}
                />
              ))}
            </ul>
          </div>
          {text}
          {waringText}
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
