// import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="content-container">
        <h1 className="heading">FAQs</h1>
        <ul className="list-items">
          {faqsList.map(eachFaqs => (
            <FaqItem faqsDetails={eachFaqs} key={eachFaqs.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
