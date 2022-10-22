import { Component } from 'solid-js';
import { savedReposIds, setSaveReposIds } from '../../pages/Home';
import { savedRepos, setSavedRepos } from '../../pages/SavedRepos';

export interface Repo {
  id: string;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: string;
  owner: {
    login: string;
  };
}

type Props = {
  repo: Repo;
};

const RepoCard: Component<Props> = (props) => {
  const { stargazers_count, html_url, owner, name, description, id } =
    props.repo;

  const handleSaveRepo = () => {
    setSavedRepos([...savedRepos(), props.repo]);
    setSaveReposIds([...savedReposIds(), id]);
    localStorage.setItem('savedRepos', JSON.stringify(savedRepos()));
  };

  const handleDeleteRepo = () => {
    setSavedRepos([...savedRepos().filter((repo) => repo.id !== id)]);
    setSaveReposIds([...savedReposIds().filter((repoId) => repoId !== id)]);
    localStorage.setItem('savedRepos', JSON.stringify(savedRepos()));
  };

  return (
    <div class='card'>
      <div class='card-header'>&#11088; stars: {stargazers_count}</div>
      <div class='card-body'>
        <a
          href={html_url}
          class='h4 card-title text-decoration-none'
          target='_blank'
          rel='noreferrer'
        >
          <strong>{owner.login}</strong>/{name}
        </a>
        <p class='card-text'>{description}</p>
        {!savedReposIds().includes(id) ? (
          <button class='btn btn-success' onClick={handleSaveRepo}>
            Save
          </button>
        ) : (
          <button class='btn btn-danger' onClick={handleDeleteRepo}>
            Unsave
          </button>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
