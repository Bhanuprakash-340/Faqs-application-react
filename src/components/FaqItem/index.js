import {Component} from 'react'

import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {faqsDetails} = this.props
    const {answerText} = faqsDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const imageText = isActive ? 'minus' : 'plus'

    return (
      <button className="plus-button" type="button">
        <img
          src={image}
          alt={imageText}
          className="plus-icon"
          onClick={this.onToggleIsActive}
        />
      </button>
    )
  }

  onToggleIsActive = () => {
    // const {isActive} = this.state
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {faqsDetails} = this.props
    const {questionText} = faqsDetails

    return (
      <li className="lists">
        <div className="list-item">
          <h1 className="descriptive">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
