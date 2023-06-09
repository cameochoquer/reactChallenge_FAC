// import { Fragment } from 'react'
import { useState } from 'react'

const Shouter = () => {
  const [text, setText] = useState('')

  const handleInput = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <input value={text} onChange={handleInput}/>
      <output>{text.toUpperCase()}</output>
    </>
  )
}

export default Shouter
