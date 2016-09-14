import React, { PropTypes } from 'react'
import { container, title, slogan } from './styles.css'

export default function Home(props) {
  return (
    <div className={container}>
      <h2 className={title}>{'Starting..'}</h2>
      <p className={slogan}>{'Find your random match'}</p>
    </div>
  )
}
