import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./user-account.css";

const UserAccount = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBlackWhiteLeafLogoRemovebgImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onArrowIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/calling");
  }, [navigate]);

  return (
    <div className="user-account">
      <div className="div7">9:41</div>
      <div className="rectangle-parent26">
        <div className="group-child47" />
        <div className="group-child48" />
        <div className="group-child49" />
      </div>
      <div className="lte6">LTE</div>
      <div className="rectangle-parent27">
        <div className="group-child50" />
        <div className="group-child51" />
      </div>
      <div className="back-wrapper" onClick={onGroupContainer2Click}>
        <div className="back">Back</div>
      </div>
      <div className="hello-wrapper">
        <b className="hello3">Hello</b>
      </div>
      <div className="previous-doctor-appointments-wrapper">
        <b className="previous-doctor-appointments">
          Previous Doctor Appointments
        </b>
      </div>
      <div className="current-health-insurance-schem-wrapper">
        <b className="current-health-insurance">
          Current Health Insurance Scheme
        </b>
      </div>
      <div className="user-account-child" />
      <div className="user-account-item" />
      <img
        className="black-white-leaf-logo-removebg-icon5"
        alt=""
        src="/black-white-leaf-logoremovebgpreview-2@2x.png"
        onClick={onBlackWhiteLeafLogoRemovebgImageClick}
      />
      <img
        className="user-account-inner"
        alt=""
        src="/arrow-1.svg"
        onClick={onArrowIconClick}
      />
      <img className="arrow-icon" alt="" src="/arrow-2.svg" />
      <img className="user-account-child1" alt="" src="/arrow-2.svg" />
      <b className="mr-naveen-mehta">Mr. Naveen Mehta</b>
      <div className="user-account-child2" onClick={onRectangle2Click} />
      <div className="call-ambulance-102-wrapper">
        <b className="call-ambulance-">Call Ambulance - 102</b>
      </div>
      <b className="sos">SOS</b>
      <img className="user-account-child3" alt="" />
      <img className="user-account-child4" alt="" />
      <img className="user-account-child5" alt="" />
    </div>
  );
};

export default UserAccount;
