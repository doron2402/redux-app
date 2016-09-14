import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { container, navContainer, link } from './styles.css'

function NavLinks ({isAuthed}) {
  return !!isAuthed ?
    <ul>
      <li><Link className={link} to='/'>{'Home'}</Link></li>
    </ul>
  : null
}

function ActionLinks ({isAuthed}) {
  return isAuthed === true
  ?
    <ul>
      <li>{'Dashboard'}</li>
      <li><Link className={link} to='/logout'>{'Logout'}</Link></li>
    </ul>
  : <ul>
    <li><Link className={link} to='/'>{'Home'}</Link></li>
    <li><Link className={link} to='/auth'>{'Login'}</Link></li>
  </ul>
}

class Navigation extends Component {
  render () {
    return (
      <div className={container}>
        <nav className={navContainer}>
          <NavLinks isAuthed={this.props.isAuthed}/>
          <ActionLinks isAuthed={this.props.isAuthed}/>
        </nav>
      </div>
    )
  }
}

Navigation.propTypes = ActionLinks.propTypes = NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}


export default Navigation
