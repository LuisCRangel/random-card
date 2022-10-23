import React from 'react'

const QuoteBox = ({randomQuote, randomColor,getRandomAll}) => {

console.log(randomQuote)

const colorObj = {
  color: randomColor
}
const backgroundObj = {
  backgroundColor: randomColor
}

  return (
    <article style={colorObj} className='card'>
      
      <p className='card__quote'><i class='bx bxs-quote-alt-left'></i>  {randomQuote.quote}</p>
      <h3 className='card__author'>{randomQuote.author}</h3>
      <button onClick={getRandomAll} style={backgroundObj} className='card__btn'><i className='bx bx-right-arrow-alt'></i></button>

    </article>
  )
}

export default QuoteBox