/* eslint-disable no-undef */
// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }
  // eslint-disable-next-line lines-between-class-members
  // state = {count1: 0}

  eatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count">{mangoCount}</span> mangoes
            <span className="count">{bananaCount}</span> bananas
          </h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="mango-img"
              alt="mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="banana-img"
              alt="banana"
            />
            <div className="buttons-container">
              <button className="button" type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
              <button className="button" type="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
