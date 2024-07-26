import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
// import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'

// function Users({ users, loading })
function Users() {
  const githubContext = useContext(GithubContext)
    // state = {
    //     users : [
    //         {
    //             login: "mojombo",
    //             id: 1,
    //             avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    //             html_url: "https://github.com/mojombo"
    //         },
    //         {
    //             login: "defunkt",
    //             id: 2,
    //             avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
    //             html_url: "https://github.com/defunkt"
    //         },
    //         {
    //             login: "pjhyett",
    //             id: 3,
    //             avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
    //             html_url: "https://github.com/pjhyett"
    //         }
    //     ]
    // }

    const { loading, users } = githubContext

    if(loading){
      return <Spinner />
    } else{
      return (
        <div style={userStyle}>
          {users.map(user => (
              <UserItem key={user.id} user={user}/>
          ))}
        </div>
      )
    }


}

// Users.propTpes = {
//   users : PropTypes.array.isRequired,
//   loading: PropTypes.bool.isRequired
// }

const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3, 1fr)',
    gridGap : '40px'
  }

export default Users
