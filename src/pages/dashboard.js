import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import Profile from '../components/profile';
import SpecialRoute from '../components/special-route';
import BasicRoute from '../components/basic-route';
import RouteLogin from '../components/route-login';

const Dashboard = ({ location }) => {
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true });
    }
  }, [location.pathname]);
  return (
    <Layout>
      <Profile />
      <Router>
        <SpecialRoute path="/dashboard/special" />
        <BasicRoute path="/dashboard/basic" />
        <RouteLogin path="/dashboard/login" />
      </Router>
    </Layout>
  );
};

export default Dashboard;
