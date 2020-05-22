import React, { Component } from 'react'
import CreateItemMutation from '../../mutations/createItemMutation'
import './styles.css'

class CreateItem extends Component {
  state = {
    question: '',
    answers: [''],
    correctAnswerId: ''
  }

  addAnswer  = (prevState) => {
    this.setState((prevState) => ({
      answers: [...prevState.answers, ''],
    }))
  }

  removeAnswer = (index) => {
    this.state.answers.splice(index,1)
    this.setState({ answers: this.state.answers })
  }

  handleAnswerChange = (e, index) => {
    let answers = [...this.state.answers]
    answers[index] = e.target.value
    this.setState({ answers })
  };

  createItem = () => {
    const { question, answers, correctAnswerId } = this.state
    this.props.add()
    CreateItemMutation(question, answers, correctAnswerId, () => console.log(`Mutation completed`))
  }

  render() {
    return (
      <>
        <div className='form-box'>
          <div>
            <input 
              className='input-question'
              type="text" 
              placeholder="Pergunta"
              value={this.state.question}
              onChange={(e) => this.setState({ question: e.target.value })}
            />
            <input
              className='input' 
              type="number" 
              placeholder="Resposta correta"
              value={this.state.correctAnswerId}
              onChange={(e) => this.setState({ correctAnswerId: parseInt(e.target.value) })}
            /> 
            {this.state.answers.map((ans, index) => (
                <div className='answer-box'key={index}>
                  <input
                    className='input' 
                    type='text'
                    placeholder={`Resposta ${index}`}
                    onChange={(e) => this.handleAnswerChange(e, index)}
                  />
                  <button 
                    className='answer-alter'
                    onClick={() => this.removeAnswer(index)}
                  >
                    REMOVER
                  </button>
                </div>
            ))}
            <button className='answer-alter'onClick={(e) => this.addAnswer(e)}>ADICIONAR RESPOSTA</button>
          </div>
          <div>
            <button className='submit'onClick={() => this.createItem()}>SALVAR</button>
          </div>
        </div>
      </>
    )
  }
}

export default CreateItem
