import React, { useState } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const SingleCharacterQuery = gql`
query($character: String!){
    characters(filter:{name: $character}){
        info{
            count
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
                            characters: { info, results } = {}
                        } = {}
                    }
                ) => {
                    console.log(loading, error, results)

                    if (loading) return <p>Loading... wait!</p>
                    if (error) return <p>Oh! My! Godness!</p>

                    return (<> ({info && info.count})
                        {results ? results.map(
                        ({ name, id }) => (
                            <p key={id}>{name}</p>
                        )
                    ) : <p>No Results</p>}
                    </>)
                }}

            </Query>


        </>
    )
}


export default SingleCharacter;