import React, { Component } from 'react'
import DeleteItemMutation from '../../mutations/deleteItemMutation'
import './styles.css'

class Item extends Component {

  deleteItem = () => {
    const { id } = this.props.item
    DeleteItemMutation(id, () => console.log(`Mutation completed`))
  }

  render() {
    return (
      <div className="container">
        <div className="qa-box">
          <div className="question">{this.props.item.question}</div>
          <div>{this.props.item.answers.map((answer, i) => 
            this.props.item.correctAnswerId === i ? 
              <div key={i} className="correct-answer">{answer}</div>
            :
              <div key={i} className="answer">{answer}</div>
          
          )}</div>
        </div>
        <div className="options-box">
            <div className="options">EDITAR</div>
            <button className="options" onClick={() => this.deleteItem()}>REMOVER</button>
        </div>
      </div>
    )
  }
}

export default Item