import { Component, createEffect, createSignal, For } from 'solid-js';
import RepoCard, { Repo } from '../components/RepoCard';
import { getBaseUrlConcatenated } from '../utils/getBaseUrlConcatenated';

const [savedReposIds, setSaveReposIds] = createSignal<string[]>([]);
const [userName, setUserName] = createSignal('');
const [repos, setRepos] = createSignal([]);

const Home: Component = () => {
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const inputValue = document.querySelector('#username') as HTMLInputElement;

    setUserName(inputValue.value);
  };

  createEffect(async () => {
    try {
      if (userName()) {
        const res = await fetch(getBaseUrlConcatenated(userName()));
        const data = await res.json();
        setRepos(data);
      }
    } catch {
      //error
    }
  });

  return (
    <div>
      <form class='mb-3' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search for github repos'
          class='p-1 align-middle'
          id='username'
          value={userName()}
        />
        <button type='submit' class='btn btn-dark ms-3 w-auto'>
          Fetch
        </button>
      </form>
      <h3>Github repos for {userName()}</h3>
      <For each={repos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export { savedReposIds, setSaveReposIds, repos, userName, setUserName };

export default Home;
