import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import axios from "axios";
import "./App.css";

const App = () => {

  const [ users, setUsers] = useState([])
  const [ user, setUser] = useState({})
  const [ repos, setRepos] = useState([])
  const [ loading, setLoading] = useState(false)
  const [ alert, setAlert] = useState(null)

  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null,
  // }; restructured above

  // DISPLAYS RANDOM USERS ON PAGE BEFORE ACTUAL SEARCH
  // async componentDidMount() {

  //   this.setState({ loading: true })

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

  //   this.setState({ users : res.data, loading: false})
  // }

  // SEARCH GITHUB USERS
  const searchUsers = async (text) => {
    // this.setState({ loading: true });
    setLoading(true)

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // this.setState({ users: res.data.items, loading: false }); new way below
    setUsers(res.data.items)
    setLoading(false)
  };

  // GET SINGLE GITHUB USER
  const getUser = async (username) => {
    setLoading(true)

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUser(res.data)
    setLoading(false)
  };

  // get users repos
  const getUserRepos = async (username) => {
    setLoading(true)

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(res.data)
    setLoading(false)
  };

  // CLEAR USERS FROM STATE
  const clearPage = () => {
    // this.setState({ users: [], loading: false });
    setUsers([])
    setLoading(false)
  };

  // SET ALERT
  const showAlert = (msg, type) => {
    // this.setState({ alert: { msg, type } });
    setAlert({ msg, type })

    setTimeout(() => setAlert(null), 3000);
  };

    // const { users, user, repos, loading } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Routes>
              <Route
                path='/'
                element={
                  <Fragment>
                    <Search
                      searchUsers={searchUsers}
                      clearPage={clearPage}
                      showClear={users.length > 0 ? true : false}
                      setAlert={showAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                }
              />
              <Route path='/about' element={<About />} />
              <Route
                path='/user/:login'
                element={
                  <User
                    // {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    );
}

export default App;

// {...props}
