import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-component5.css";

const FrameComponent5 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/user-account");
  }, [navigate]);

  const onGroupIconClick = useCallback(() => {
    navigate("/user-account");
  }, [navigate]);

  const onBlackWhiteLeafLogoRemovebgImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/medicine-reminders1");
  }, [navigate]);

  return (
    <section className="medicine-reminders-inner">
      <div className="frame-parent5">
        <header className="frame-wrapper11">
          <div className="frame-parent6">
            <div className="wrapper1">
              <div className="div4">9:41</div>
            </div>
            <div className="rectangle-parent11">
              <div className="frame-child36" />
              <div className="frame-wrapper12">
                <div className="rectangle-parent12">
                  <div className="frame-child37" />
                  <div className="frame-child38" />
                  <div className="frame-child39" />
                </div>
              </div>
              <div className="lte-frame">
                <div className="lte4">LTE</div>
              </div>
              <div className="frame-wrapper13">
                <div className="rectangle-parent13">
                  <div className="frame-child40" />
                  <div className="frame-child41" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="frame-parent7">
          <div className="frame-parent8">
            <div className="hello-group" onClick={onGroupContainerClick}>
              <div className="hello2">Hello,</div>
              <div className="mr-mehta-container">
                <div className="mr-mehta1">Mr. Mehta</div>
              </div>
            </div>
            <img
              className="group-icon"
              loading="lazy"
              alt=""
              src="/group-5.svg"
              onClick={onGroupIconClick}
            />
          </div>
          <div className="add-button">
            <div className="reminder-list">
              <h2 className="medicine-reminders3">MEDICINE REMINDERS</h2>
              <div className="date-and-time">
                <img className="i121-1-icon1" alt="" src="/2010i121-1@2x.png" />
                <img
                  className="black-white-leaf-logo-removebg-icon3"
                  loading="lazy"
                  alt=""
                  src="/black-white-leaf-logoremovebgpreview-2@2x.png"
                  onClick={onBlackWhiteLeafLogoRemovebgImageClick}
                />
              </div>
            </div>
          </div>
          <button className="rectangle-parent14" onClick={onGroupButtonClick}>
            <div className="frame-child42" />
            <b className="add-reminder">Add Reminder</b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
