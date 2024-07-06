import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// React v 5.3
// const PrivateRoute = ({ Component, auth, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => {
//       return <Component {...props} />;
//     }}
//   ></Route>
// );

// React v 6.0
const PrivateRoute = ({ children, auth, ...rest }) => {
  if (auth.isLoading) {
    return <h2>Loading...</h2>;
  } else if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
