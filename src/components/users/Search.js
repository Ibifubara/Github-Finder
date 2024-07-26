import React, { useState, useContext} from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from '../../context/alert/alertContext';

// const  Search = ({ searchUsers,showClear, clearPage, setAlert}) modified below
const  Search = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)
  // state = {
  //   text: "",
  // }; restructured below: 

  const [text, setText] = useState('')


  // const onChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };restructured below:
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(text === ''){
      alertContext.setAlert('Please enter something', 'light')
    } else{
      githubContext.searchUsers(text);
      // searchUsers(text) modified above with context
      // this.setState({ text: "" });restructured below:
      setText('')
    } 
  };

 
    // destructuring so I won't have to write this.props when using these two parameters
    // const { showClear, clearPage } = this.props => former way to do it in class component, it's now destructured at the beginning where the function is declared

    return (
      <div>
        <form onSubmit={onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search for a user...'
            value={text}
            onChange={onChange}
          />
          <input type='submit' value='Search' className='btn' />
        </form>
        {githubContext.users.length > 0 && (
          <button onClick={githubContext.clearPage}>Clear</button>
        )}
      </div>
    );
}

// {showClear && (
//   <button onClick={clearPage}>Clear</button>
// )} modified above
// Search.defaultProps = {
//   searchIcon: 'bx bx-search-alt'
// }

// Search.propTypes = {
//   searchUsers: PropTypes.func.isRequired,
//   clearPage: PropTypes.func.isRequired,
//   showClear: PropTypes.bool.isRequired,
//   setAlert: PropTypes.func.isRequired
// };

export default Search;
