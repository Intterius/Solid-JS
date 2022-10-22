import { A } from '@solidjs/router';
import { Component } from 'solid-js';
import { savedRepos } from '../../pages/SavedRepos';

const Nav: Component = () => {
  return (
    <div class='mt-5 mb-3'>
      <A href='/' class='btn btn-primary me-2' activeClass='btn-success' end>
        Home
      </A>
      <A
        href='saved-repos'
        class='btn btn-primary me-2'
        activeClass='btn-success'
      >
        Saved ~ {savedRepos().length}
      </A>
    </div>
  );
};

export default Nav;
