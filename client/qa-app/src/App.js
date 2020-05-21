import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import ItensList from './components/ItensList';
import environment from './Environment';

const query = graphql`
  query itens {
    itens {
      id
      questions
      answers
      correctAnswerId
    }
  }
`;

const Container = () => (
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
);

export default Container;