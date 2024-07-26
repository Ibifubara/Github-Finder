import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_PAGE,
  GET_USER,
  GET_REPOS,
} from "../types";

// wasn't here initially
let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
// the above was recently modified to make the code clean

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search users
  const searchUsers = async (text) => {
    // this.setState({ loading: true });
    // setLoading(true);MODIFIED BELOW FOR CONTEXT
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`

      // `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // this.setState({ users: res.data.items, loading: false }); new way below
    // setUsers(res.data.items);
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
    // setLoading(false);
  };

  // Get user
  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      // `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // setUser(res.data);
    // setLoading(false);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // Get repos
  const getUserRepos = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    // setRepos(res.data);
    // setLoading(false);
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // Clear Page
  const clearPage = () => dispatch({ type: CLEAR_PAGE });
  //     {
  //     this.setState({ users: [], loading: false });
  //     setUsers([]);
  //     setLoading(false);
  //   };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearPage,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
