import React from "react";
//Apollo GraphQL Client
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import SingleCharacter from "./components/singleCharacter";
//Our component showing all the characters
// import AllCharacters from "./components/allCharacters";


//Apollo client init
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/"
});

//Functional Component APP
function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* <AllCharacters /> */}
        <SingleCharacter />
      </div>
    </ApolloProvider>
  );
}

export default App;
