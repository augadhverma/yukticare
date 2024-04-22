import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="login">
      <div className="login-child" />
      <div className="login-item" />
      <div className="div5">9:41</div>
      <div className="rectangle-parent19">
        <div className="group-child33" />
        <div className="group-child34" />
        <div className="group-child35" />
      </div>
      <div className="lte4">LTE</div>
      <div className="rectangle-parent20">
        <div className="group-child36" />
        <div className="group-child37" />
      </div>
      <div className="group-parent">
        <div className="rectangle-parent21" onClick={onGroupContainerClick}>
          <div className="group-child38" />
          <b className="submit">SUBMIT</b>
        </div>
        <b className="dont-have-an">Don’t have an account?</b>
      </div>
      <img className="view-hide-icon" alt="" src="/view-hide@2x.png" />
      <img
        className="black-white-leaf-logo-removebg-icon3"
        alt=""
        src="/black-white-leaf-logoremovebgpreview-2@2x.png"
      />
      <div className="rectangle-parent22">
        <div className="group-child39" />
        <b className="password">Password</b>
        <img className="star-icon" alt="" src="/star-2.svg" />
        <b className="forgot-your-password">{`Forgot your password ? `}</b>
      </div>
      <div className="rectangle-parent23">
        <div className="group-child40" />
        <b className="email-address">Email Address</b>
        <img className="group-child41" alt="" src="/star-1.svg" />
      </div>
      <img
        className="removebg-preview-1-icon"
        alt=""
        src="/8567885removebgpreview-1@2x.png"
      />
    </div>
  );
};

export default Login;
