import React, { Component } from 'react';

import RecipesPage from '~/src/components/RecipesPage';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RecipesPage />
      </div>
    );
  }
}
