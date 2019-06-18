import React, { useState } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const SingleCharacterQuery = gql`
query($page: Int! ,$character: String!}{
    characters(page:$page, filter:{name: $character}){
        info{
            count
            next
            prev
            pages
        }
        results{
            name
            id
        }
    }
}
`

const SingleCharacter = () => {

  // useState Hook
  const [page, setPage] = useState(1);
  const [character, SetCharacter] = useState("Morty")

  return (
    <>
      <input type="text" value={character} onChange={(e) => SetCharacter(e.target.value)} />
      <Query variables={{ character }} query={SingleCharacterQuery}>

        {(
          {
            loading,
            error,
            data: {
              characters: { info: { next, prev, pages }, results } = {}
            } = {}
          }
        ) => {
          console.log(loading, error, results)

          if (loading) return <p>Loading... wait!</p>
          if (error) return <p>Oh! My! Godness!</p>
          next = next ? next : 1;
          prev = prev ? prev : 1;

          return (<> {count > 0 && count}
            {results ? results.map(
              ({ name, id }) => (
                <p className="character-container" key={id}>{name}</p>
              )
            ) : <p>No Results</p>}
            <button type="button" onClick={() =>}

          </>)
          }}
  
      </Query>


    </>
      )
    }
const paginationButton = (pageCount, setPage, currentPage) => {
  const pageButtons = []
          ;
  for (let i = 1; i <= pageCount; i++) {
          pageButtons.push(
            <button className={currentPage === i ? "btn active" : "btn"}
              key={i}
              onClick={() => setPage(i)}>{i}</button>

          )


        } return pageButtons;
      
  export default SingleCharacter;