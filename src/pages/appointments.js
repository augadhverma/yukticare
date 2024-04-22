import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./appointments.css";

const Appointments = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/user-account");
  }, [navigate]);

  const onGroupIconClick = useCallback(() => {
    navigate("/user-account");
  }, [navigate]);

  const onBlackWhiteLeafLogoRemovebgImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="appointments1">
      <div className="div4">9:41</div>
      <div className="rectangle-parent13">
        <div className="group-child24" />
        <div className="group-child25" />
        <div className="group-child26" />
      </div>
      <div className="lte3">LTE</div>
      <div className="rectangle-parent14">
        <div className="group-child27" />
        <div className="group-child28" />
      </div>
      <div className="hello-container" onClick={onGroupContainer2Click}>
        <div className="hello2">Hello,</div>
        <div className="mr-mehta2">Mr. Mehta</div>
      </div>
      <img
        className="appointments-child"
        alt=""
        src="/group-5.svg"
        onClick={onGroupIconClick}
      />
      <b className="add-appointments">
        <p className="dr-rohan-gupta">ADD</p>
        <p className="dr-rohan-gupta">APPOINTMENTS</p>
      </b>
      <img className="appointments-item" alt="" />
      <div className="appointments-inner" />
      <img
        className="black-white-leaf-logo-removebg-icon2"
        alt=""
        src="/black-white-leaf-logoremovebgpreview-2@2x.png"
        onClick={onBlackWhiteLeafLogoRemovebgImageClick}
      />
      <div className="rectangle-parent15">
        <div className="group-child29" />
        <div className="dr-rohan-gupta-container">
          <p className="dr-rohan-gupta">
            <b>Dr. Rohan Gupta</b>
          </p>
          <p className="p">
            <span>
              <span className="span">(+91 90465 85462)</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span className="span">&nbsp;</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span>Geriatric Medicine</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span>Serenity Clinic, Malviya Nagar</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
        </div>
      </div>
      <div className="rectangle-parent16">
        <div className="group-child29" />
        <div className="dr-rohan-gupta-container">
          <p className="dr-rohan-gupta">
            <b>Dr. Ruby Mehra</b>
          </p>
          <p className="p">
            <span>
              <span className="span">(+91 97563 78952)</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span className="span">&nbsp;</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span>General Physicist</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span>Wellness Center, Hauz Khas</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
        </div>
      </div>
      <div className="appointments-child1" />
      <div className="appointments-child2" />
      <div className="rectangle-parent17">
        <div className="group-child31" />
        <b className="add-new-doctor">Add New Doctor</b>
      </div>
      <div className="rectangle-parent18">
        <div className="group-child29" />
        <div className="dr-rohan-gupta-container">
          <p className="dr-rohan-gupta">
            <b>Dr. Vidhu Patel</b>
          </p>
          <p className="p">
            <span>
              <span className="span">(+91 98682 79312)</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span className="span">&nbsp;</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span>Orthopedist</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span>WeCare Clinic, South Ex.</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="dr-rohan-gupta">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
