import React from 'react'
import Feed from './Feed'
import { useStoreState } from 'easy-peasy';

const Home = ({ isLoading, fetchError}) => {

  const {searchResults} = useStoreState((state) => state.searchResults);
  //console.log(searchResults)

  return (
    <main className="Home">
        {isLoading && <p className="statusMsg">Loading Posts...</p>}
        {!isLoading && fetchError && <p classname="statusMsg" style={{color: "red"}}>{fetchError}</p>}
        {!isLoading && !fetchError && ( searchResults ? <Feed posts={searchResults} /> : <p className="statusMsg">No posts to display.</p>)}
    </main>
  )
}

export default Home