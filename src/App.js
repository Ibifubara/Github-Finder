import React from "react"; 
// removed useState as we no longer need it since it's coming from context
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
// import Users from "./components/users/Users"; now in home.js
// import Search from "./components/users/Search"; now in home.js
import Alert from "./components/layout/Alert";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import User from "./components/users/User";
// import axios from "axios"; we don't need axios because no request is mad from here, githubstate does the work now

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);

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

  // SEARCH GITHUB USERS - now modified in githubreducer.js

  // GET SINGLE GITHUB USER

  // GET USER REPOS

  // CLEAR USERS FROM STATE

  // SET ALERT


  // const { users, user, repos, loading } = this.state;
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Routes>
                <Route
                  path='/'
                  element={<Home />}
                />
                <Route path='/about' element={<About />} />
                <Route
                  path='/user/:login'
                  element={
                    <User />
                  }
                />
                <Route path="/" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

// {...props}
/* <Users loading={loading} users={users} /> */
/* <Alert alert={alert} /> */
/* <Search */
      // searchUsers={searchUsers}don't need again, can access through context
      // clearPage={clearPage}
      // showClear={users.length > 0 ? true : false}
      // setAlert={showAlert}
      // />
/* <User */
      // {...props}
      // getUser={getUser}modified
      // getUserRepos={getUserRepos} modified
      // user={user} will get this from context
      // repos={repos}
      // loading={loading}
      // />

      // element={
      //   <Fragment>
      //     <Search />
      //     <Users />
      //   </Fragment>
      // }