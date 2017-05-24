import React from 'react';

import {
  Page
} from 'react-onsenui';

import NavBar from './NavBar';

const MainPage = ({navigator}) => (
  <Page renderToolbar={() => <NavBar title='Free Biker' navigator={navigator} />}>

  </Page>
);

export default MainPage;
