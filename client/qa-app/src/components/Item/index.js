import React, { Component } from 'react'
import './styles.css'

class Item extends Component {
  render() {
    return (
      <div className="qa-box">
        <div className="question">{this.props.item.question}</div>
        <div>{this.props.item.answers.map((answer, i) => 
          this.props.item.correctAnswerId === i ? 
            <div key={i} className="correct-answer">{answer}</div>
          :
            <div key={i} className="answer">{answer}</div>
        
        )}</div>
      </div>
    )
  }
}

export default Item