import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-component1.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/user-account");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/user-account");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/medicine-reminders");
  }, [navigate]);

  return (
    <section className="appointment-label-wrapper">
      <div className="appointment-label">
        <div className="doctor-name-label-wrapper">
          <div className="doctor-name-label">
            <div className="doctor-name-label-inner">
              <div
                className="latest-project-parent"
                onClick={onGroupContainerClick}
              >
                <div className="latest-project" />
                <div className="line-div" />
                <div className="frame-child21" />
              </div>
            </div>
            <div className="hello-parent" onClick={onGroupContainer2Click}>
              <div className="hello">Hello,</div>
              <div className="mr-mehta-wrapper">
                <div className="mr-mehta">Mr. Mehta</div>
              </div>
            </div>
          </div>
        </div>
        <div className="i121-1-parent" onClick={onGroupContainer3Click}>
          <img className="i121-1-icon" alt="" src="/2010i121-1@2x.png" />
          <div className="date-label">
            <div className="date-label-child" />
            <h1 className="medicine-reminders2">MEDICINE REMINDERS</h1>
            <div className="next-vitamin-c-container">
              <p className="next-vitamin-c-capsules">
                <span>
                  <b className="next">Next:</b>
                </span>
                <span>
                  <span> Vitamin C Capsules</span>
                </span>
              </p>
              <p className="am-23-april-2024">
                <span>
                  <span>09:30 AM • 23 April 2024</span>
                </span>
              </p>
            </div>
          </div>
          <img
            className="black-white-leaf-logo-removebg-icon1"
            loading="lazy"
            alt=""
            src="/black-white-leaf-logoremovebgpreview-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
