import React from 'react';
import { Link } from 'gatsby';

const Profile = () => {
  return (
    <div className="dashboard-header">
      <nav>
        <Link to="/dashboard/special" activeClassName="active">
          Special Content
        </Link>
        <Link to="/dashboard/basic" activeClassName="active">
          Basic Stuff
        </Link>
      </nav>
      <span>Todo: login</span>
    </div>
  );
};

export default Profile;
