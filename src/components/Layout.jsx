import React from 'react';

const Layout = (props) => (
  <div className="main-container">
    {props.children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.element,
};

export default Layout;
