import { Route, Routes } from '@solidjs/router';
import { Component, createEffect } from 'solid-js';
import { Repo } from './components/RepoCard';
import Home, { setSaveReposIds } from './pages/Home';
import SavedRepos, { setSavedRepos } from './pages/SavedRepos';
import Nav from './components/Navbar';

const App: Component = () => {
  createEffect(() => {
    const savedRepos = JSON.parse(
      localStorage.getItem('savedRepos') || '[]'
    ) as unknown as Repo[];

    setSavedRepos([...savedRepos]);
    setSaveReposIds([...savedRepos.map((repo) => repo.id)]);
  });

  return (
    <div class='container'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/saved-repos' element={<SavedRepos />} />
      </Routes>
    </div>
  );
};

export default App;
