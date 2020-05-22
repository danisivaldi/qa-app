import React, { Component } from 'react'
import CreateItemMutation from '../../mutations/createItemMutation'
import './styles.css'

class CreateItem extends Component {
  state = {
    question: '',
    answers: [''],
    correctAnswerId: '',
    checked: [false]
  }

  addAnswer  = (prevState) => {
    this.setState((prevState) => ({
      answers: [...prevState.answers, ''],
      checked: [...prevState.checked, false]
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

  handleCheckbox = (index) => {
    let oldCheck = this.state.checked[index]
    let checked = [...this.state.checked]

    if (oldCheck === false) {
      checked.fill(false)
      checked[index] = true 
    } else {
      checked[index] = false
    }
    this.setState({ checked, correctAnswerId: index })
  }

  createItem = () => {
    const { question, answers, correctAnswerId } = this.state
    this.props.add()
    CreateItemMutation(question, answers, correctAnswerId, () => console.log(`Mutation completed`))
    window.location.reload(false);
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
            {this.state.answers.map((ans, index) => (
                <div className='answer-box'key={index}>
                  <input
                    className='input' 
                    type='text'
                    placeholder={`Resposta ${index+1}`}
                    onChange={(e) => this.handleAnswerChange(e, index)}
                  />
                  <label className='container'>
                    <input
                      type='checkbox'
                      checked={this.state.checked[index]}
                      onChange={( ) => this.handleCheckbox(index)}
                    />
                    <span className='checkmark'></span>
                  </label>
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
            <button className='submit' onClick={() => this.createItem()}>SALVAR</button>
          </div>
        </div>
      </>
    )
  }
}

export default CreateItem
