import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { Alert } from "react-bootstrap";
import { hideAlert } from "../helpers/actions";

function Alerts({ alert }) {
  const dispatch = useDispatch();

  function disableAlert() {
    if (alert.show) {
      setTimeout(() => {
        dispatch(hideAlert());
      }, 2000);
    }
  }

  useEffect(() => {
    disableAlert();
  }, [alert]);

  return (
    <Alert variant={alert.variant} show={alert.show}>
      {alert.message}
    </Alert>
  );
}

const mapStateToProps = (state) => {
  return {
    alert: state.alert,
  };
};

export default connect(mapStateToProps)(Alerts);
