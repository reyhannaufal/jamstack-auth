import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import IdentityModal from 'react-netlify-identity-widget';
import { useIdentityContext } from 'react-netlify-identity';

import PrivateRoute from '../components/private-route';
import Layout from '../components/layout';
import Profile from '../components/profile';
import SpecialRoute from '../components/special-route';
import BasicRoute from '../components/basic-route';
import RouteLogin from '../components/route-login';
import 'react-netlify-identity-widget/styles.css';

const Login = ({ openLogin }) => {
  const identity = useIdentityContext();

  if (identity && identity.isLoggedIn) {
    navigate('/dashboard/secret', { replace: true });
  }

  return (
    <>
      <h1>Log In or Sign Up</h1>
      <button onClick={openLogin}>Log In</button>
    </>
  );
};

const Dashboard = ({ location }) => {
  const [isVisible, setVisibility] = useState(true);

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true });
    }
  }, [location.pathname]);

  const showModal = () => setVisibility(true);

  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        <Login path="/dashboard/login" openLogin={showModal} />
        <PrivateRoute path="/dashboard/special" component={SpecialRoute} />
        <PrivateRoute path="/dashboard/basic" component={BasicRoute} />
        {/* <RouteLogin path="/dashboard/login" showModal={showModal} /> */}
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </Layout>
  );
};

export default Dashboard;
