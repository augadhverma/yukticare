import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./login-page.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSIGNUPTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="login-page">
      <img
        className="login-page-child"
        alt=""
        src="/rectangle-1.svg"
        onClick={onRectangleClick}
      />
      <img className="login-page-item" alt="" src="/rectangle-2.svg" />
      <img
        className="inhaller-rafiki-removebg-previ-icon"
        alt=""
        src="/inhallerrafikiremovebgpreview-1@2x.png"
      />
      <b className="guardianship-in-every-container">
        <p className="guardianship-in-every">GUARDIANSHIP IN EVERY REMINDER</p>
        <p className="guardianship-in-every">
          <span>{` `}</span>
          <span className="care">CARE</span>
          <span className="in-every-tap"> IN EVERY TAP</span>
        </p>
      </b>
      <b className="sign-up" onClick={onSIGNUPTextClick}>
        SIGN UP
      </b>
      <b className="login1">LOGIN</b>
      <div className="login-page-inner" />
      <div className="login-page-child1" />
      <div className="login-page-child2" />
      <div className="div6">9:41</div>
      <div className="rectangle-parent24">
        <div className="group-child42" />
        <div className="group-child43" />
        <div className="group-child44" />
      </div>
      <div className="lte5">LTE</div>
      <div className="rectangle-parent25">
        <div className="group-child45" />
        <div className="group-child46" />
      </div>
      <div className="login-page-child3" />
      <div className="login-page-child4" />
      <img
        className="black-white-leaf-logo-removebg-icon4"
        alt=""
        src="/black-white-leaf-logoremovebgpreview-1@2x.png"
      />
    </div>
  );
};

export default LoginPage;
