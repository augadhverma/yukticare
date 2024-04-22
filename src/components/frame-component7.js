import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-component7.css";

const FrameComponent7 = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/medicine-reminders");
  }, [navigate]);

  return (
    <form className="frame-form">
      <div className="frame-parent13">
        <div className="reminder-title-wrapper">
          <b className="reminder-title">
            <p className="reminder-title1">Reminder Title</p>
          </b>
        </div>
        <div className="rectangle-parent16">
          <div className="frame-child44" />
          <div className="add-a-title">Add a title here</div>
        </div>
      </div>
      <div className="frame-parent14">
        <div className="when-to-remind-you-wrapper">
          <b className="when-to-remind">When to Remind You?</b>
        </div>
        <div className="rectangle-parent17">
          <div className="frame-child45" />
          <div className="choose-time">{`Choose Time & Date`}</div>
        </div>
      </div>
      <div className="frame-wrapper17">
        <button className="rectangle-parent18" onClick={onGroupButtonClick}>
          <div className="frame-child46" />
          <b className="add-reminder1">Add Reminder</b>
        </button>
      </div>
    </form>
  );
};

export default FrameComponent7;
