import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function UserItem({user: {login, avatar_url, html_url}}) {
    return (
      <div className='card'>
        <img src={avatar_url} alt="" style={{ width: '60px' }} />
        <h3>{login}</h3>
        <Link to={`/user/${login}`} className='btn'>More</Link>
      </div>
    )
}

UserItem.propTypes = {
  user : PropTypes.object.isRequired
}

export default UserItem
