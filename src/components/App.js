import React from 'react'
import CatProductContainer from './CatProductContainer.js'
import './../styles/App.css'

function App () {
  return (
    <div className='App'>
      <h1 className='app-title'>Pop cats</h1>

      <main>
        <CatProductContainer />
      </main>
    </div>
  )
}

export default App
