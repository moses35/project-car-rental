import SideBar from 'components/SideBar/SideBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MainBlock, Main } from './Layout.styled';
const Layout = () => {
  return (
    <MainBlock>
      <SideBar />
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </MainBlock>
  );
};
export default Layout;
