import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./medicine-reminders1.css";

const MedicineReminders1 = () => {
  const navigate = useNavigate();

  const onBlackWhiteLeafLogoRemovebgImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/medicine-reminders");
  }, [navigate]);

  return (
    <div className="medicine-reminders3">
      <div className="div9">9:41</div>
      <div className="rectangle-parent31">
        <div className="group-child58" />
        <div className="group-child59" />
        <div className="group-child60" />
      </div>
      <div className="lte8">LTE</div>
      <div className="rectangle-parent32">
        <div className="group-child61" />
        <div className="group-child62" />
      </div>
      <div className="hello-parent2">
        <div className="hello5">Hello,</div>
        <div className="mr-mehta4">Mr. Mehta</div>
      </div>
      <img className="medicine-reminders-child6" alt="" src="/group-5.svg" />
      <img className="i121-1-icon2" alt="" src="/2010i121-1@2x.png" />
      <b className="new-medicine-reminder-container">
        <p className="new">NEW</p>
        <p className="new">MEDICINE REMINDER</p>
      </b>
      <img className="medicine-reminders-child7" alt="" />
      <div className="medicine-reminders-child8" />
      <div className="medicine-reminders-child9" />
      <img
        className="black-white-leaf-logo-removebg-icon7"
        alt=""
        src="/black-white-leaf-logoremovebgpreview-2@2x.png"
        onClick={onBlackWhiteLeafLogoRemovebgImageClick}
      />
      <div className="medicine-reminders-child10" />
      <div className="add-a-title">Add a title here</div>
      <b className="reminder-title">
        <p className="new">Reminder Title</p>
      </b>
      <div className="medicine-reminders-child11" />
      <div className="choose-time">{`Choose Time & Date`}</div>
      <b className="when-to-remind">When to Remind You?</b>
      <div className="rectangle-parent33" onClick={onGroupContainer3Click}>
        <div className="group-child63" />
        <b className="add-reminder1">Add Reminder</b>
      </div>
    </div>
  );
};

export default MedicineReminders1;
