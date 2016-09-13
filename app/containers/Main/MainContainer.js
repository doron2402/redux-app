import React from 'react'
import { bold } from './style.css'

const MainContainer = React.createClass({
  render () {
    return (
      <p className={bold}>{'Hello World, from Doron'}</p>
    )
  },
})

export default MainContainer

