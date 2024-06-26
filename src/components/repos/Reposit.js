import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

const Reposit = ({repos}) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
}

Reposit.propTypes={
    repos: PropTypes.array.isRequired,
}

export default Reposit
