import Header from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from 'components/MainContainer/MainContainer';

const Layout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Suspense>
          <Outlet />
        </Suspense>
      </MainContainer>
    </>
  );
};
export default Layout;
