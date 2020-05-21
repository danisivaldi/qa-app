import React from 'react';
//import AddTodo from './AddTodoMutation';

const ItensList = ({ itens }) => (
    <div>
        <div>{itens.map(item => <Item item={item} key={item.id} />)}</div>
    </div>
);

const Item = ({ item }) => (
    <div>
        <p>{item.question}</p>
        <div>{item.answers.map(ans => <p>{ans}</p>)}</div>
    </div>
);

export default ItensList;

//(after itens.map)<a onClick={() => AddTodo()}>Add todo</a>