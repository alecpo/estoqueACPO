import * as React from 'react';
import Container from './Container';
import NavMenu from './NavMenu';

const Layout = (props: { children?: React.ReactNode }) => (
  <>
    <NavMenu />
    <Container />
  </>
);

export default Layout;
