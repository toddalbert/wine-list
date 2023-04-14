import { useState } from 'react'

export default function WineList() {
  const [theWines, setTheWines] = useState()
  const getWines = () => {
    fetch('https://api.sampleapis.com/wines/reds')
      .then(resp => resp.json())
      .then(setTheWines)
      .catch(alert)
  }
  console.log({theWines})
  return (
    <>
      {!theWines ? (
        <button onClick={getWines}>Load Wines...</button>
      ) : (
        theWines.map(wine => (
          <div>
            <h2>{wine.wine}</h2>
            <img src={wine.image} alt={wine.winery + ' ' + wine.wine} />
          </div>
        ))
      )}
    </>
  )
}
