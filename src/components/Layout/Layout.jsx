import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MainBlock, Main } from './Layout.styled';
const Layout = () => {
  return (
    <MainBlock>
      <Header />
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </MainBlock>
  );
};
export default Layout;
