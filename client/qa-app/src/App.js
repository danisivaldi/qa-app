import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from './Environment';

import ItensList from './components/ItensList/index';
import Header from './components/Header';

const query = graphql`
  query AppQuery {
    itens {
      id
      question
      answers
      correctAnswerId
    }
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <QueryRenderer
          environment={environment}
          query={query}
          variables={{}}
          render={({ error, props }) => {
            if (error) {
              return <div>Error! {JSON.stringify(error)}</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }
            const { itens } = props;
            return <ItensList itens={itens} />;
          }}
        />
      </div>
    );
  }
}

export default App;