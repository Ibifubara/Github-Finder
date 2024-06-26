import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Reposit from '../repos/Reposit'
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const User = ({ user, getUser, loading, getUserRepos, repos, match }) => {
  // componentDidMount() {
  //     this.props.getUser(this.props.match.params.login)
  //     this.props.getUserRepos(this.props.match.params.login)
  // }

  useEffect(() => {
    getUser(match.params.login)
    getUserRepos(match.params.login)
    // eslint-disable-next-line
  }, []);

  // getUser(login);

  // componentDidMount() {
  //     getUser(match.params.login)
  //     getUserRepos(match.params.login)
  // }

  // const { login } = useParams();

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;


  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to={`/`} className='btn'>
        Back
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className='bx bx-check-square success' />
      ) : (
        <i class='bx bx-x-circle danger'></i>
      )}
      <div className='card'>
        <div className='centered'>
          <img src={avatar_url} style={{ width: "150px" }} alt="avatarImage"/>
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="card text-center">
        <div className="badges badge-primary">Followers: {followers}</div>
        <div className="badges badge-success">Following: {following}</div>
        <div className="badges badge-danger">Public Repos: {public_repos}</div>
        <div className="badges badge-dark">Public Gists: {public_gists}</div>
      </div>

      <Reposit repos={repos} />
    </Fragment>
  );
}

User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};

export default User;
