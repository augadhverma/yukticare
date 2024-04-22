import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./home-page.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/user-account");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/user-account");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/medicine-reminders");
  }, [navigate]);

  const onAPPOINTMENTSTextClick = useCallback(() => {
    navigate("/appointments");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/insurance");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/appointments");
  }, [navigate]);

  return (
    <div className="home-page">
      <div className="div">9:41</div>
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="group-item" />
        <div className="group-inner" />
      </div>
      <div className="lte">LTE</div>
      <div className="rectangle-group">
        <div className="rectangle-div" />
        <div className="group-child1" />
      </div>
      <div className="hello-parent" onClick={onGroupContainer2Click}>
        <div className="hello">Hello,</div>
        <div className="mr-mehta">Mr. Mehta</div>
      </div>
      <div className="home-page-inner" onClick={onGroupContainer3Click}>
        <div className="line-parent">
          <div className="line-div" />
          <div className="group-child2" />
          <div className="group-child3" />
        </div>
      </div>
      <div className="home-page-child" />
      <div className="home-page-item" />
      <div className="home-page-child1" />
      <b className="june-2024">24 June 2024</b>
      <b className="june-20241">30 June 2024</b>
      <b className="dr-rohan">{`Dr. Rohan `}</b>
      <b className="dr-vidhu">{`Dr. Vidhu `}</b>
      <b className="dr-ruby">{`Dr. Ruby `}</b>
      <div className="rectangle-container" onClick={onGroupContainer4Click}>
        <div className="group-child4" />
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
        <img className="i121-1-icon" alt="" src="/2010i121-1@2x.png" />
        <b className="medicine-reminders">MEDICINE REMINDERS</b>
      </div>
      <b className="appointments" onClick={onAPPOINTMENTSTextClick}>
        APPOINTMENTS
      </b>
      <b className="april-2024">24 April 2024</b>
      <img className="line-icon" alt="" />
      <img className="home-page-child2" alt="" />
      <div className="group-div" onClick={onGroupContainer5Click}>
        <div className="rectangle-parent1">
          <div className="group-child5" />
          <b className="insurance-policies">
            <p className="next-vitamin-c-capsules">INSURANCE</p>
            <p className="next-vitamin-c-capsules">POLICIES</p>
          </b>
          <div className="with-you-in">With you in life, beyond life</div>
          <img
            className="mjexmi53mdeylm4wmdeumzhqos5wni-icon"
            alt=""
            src="/22777087-67-mjexmi53mdeylm4wmdeumzhqos5wni4zmq-prev-ui-1@2x.png"
          />
        </div>
      </div>
      <div className="rectangle-parent2" onClick={onGroupContainer6Click}>
        <div className="group-child6" />
        <b className="add-appointment">Add Appointment</b>
      </div>
      <div className="home-page-child3" />
      <div className="home-page-child4" />
      <img
        className="black-white-leaf-logo-removebg-icon"
        alt=""
        src="/black-white-leaf-logoremovebgpreview-2@2x.png"
      />
    </div>
  );
};

export default HomePage;
