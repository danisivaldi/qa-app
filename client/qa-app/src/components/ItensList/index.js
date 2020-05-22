import React, { Component } from 'react'
import './styles.css'
import Item from '../Item/'
import CreateItem from '../CreateItem'

class ItensList extends Component {
  state = {
    showCreateItem: false
  }

  onCreateItem = () => {
    this.setState (prevState => ({ showCreateItem: !prevState.showCreateItem}))
  }

  render() {
    return (
        <div>
            <button className='create-item' onClick={this.onCreateItem}>+ Nova</button>
            {this.state.showCreateItem && <CreateItem add={this.onCreateItem}/>}
            <div className='itens-list'>{this.props.itens.map(item => <Item item={item} key={item.id} />)}</div>
        </div>
    )
  }
}

export default ItensList
