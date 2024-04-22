import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./medicine-reminders.css";

const MedicineReminders = () => {
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

  const onGroupContainer3Click = useCallback(() => {
    navigate("/medicine-reminders1");
  }, [navigate]);

  return (
    <div className="medicine-reminders1">
      <div className="div8">9:41</div>
      <div className="rectangle-parent28">
        <div className="group-child52" />
        <div className="group-child53" />
        <div className="group-child54" />
      </div>
      <div className="lte7">LTE</div>
      <div className="rectangle-parent29">
        <div className="group-child55" />
        <div className="group-child56" />
      </div>
      <div className="hello-parent1" onClick={onGroupContainer2Click}>
        <div className="hello4">Hello,</div>
        <div className="mr-mehta3">Mr. Mehta</div>
      </div>
      <img
        className="medicine-reminders-child"
        alt=""
        src="/group-5.svg"
        onClick={onGroupIconClick}
      />
      <div className="vitamin-c-capsules-container">
        <p className="vitamin-c-capsules">
          <b>Vitamin C Capsules</b>
        </p>
        <p className="am-23">09:30 AM • 23 April 2024</p>
      </div>
      <div className="vitamin-c-capsules-container1">
        <p className="vitamin-c-capsules">
          <b>Vitamin C Capsules</b>
        </p>
        <p className="am-23">09:30 AM • 23 April 2024</p>
      </div>
      <div className="vitamin-c-capsules-container2">
        <p className="vitamin-c-capsules">
          <b>Vitamin C Capsules</b>
        </p>
        <p className="am-23">09:30 AM • 23 April 2024</p>
      </div>
      <div className="vitamin-c-capsules-container3">
        <p className="vitamin-c-capsules">
          <b>Vitamin C Capsules</b>
        </p>
        <p className="am-23">09:30 AM • 23 April 2024</p>
      </div>
      <img className="i121-1-icon1" alt="" src="/2010i121-1@2x.png" />
      <b className="medicine-reminders2">MEDICINE REMINDERS</b>
      <img className="medicine-reminders-item" alt="" />
      <div className="medicine-reminders-inner" />
      <div className="medicine-reminders-child1" />
      <img
        className="black-white-leaf-logo-removebg-icon6"
        alt=""
        src="/black-white-leaf-logoremovebgpreview-2@2x.png"
        onClick={onBlackWhiteLeafLogoRemovebgImageClick}
      />
      <div className="rectangle-parent30" onClick={onGroupContainer3Click}>
        <div className="group-child57" />
        <b className="add-reminder">Add Reminder</b>
      </div>
      <div className="medicine-reminders-child2" />
      <div className="medicine-reminders-child3" />
      <div className="medicine-reminders-child4" />
      <div className="medicine-reminders-child5" />
      <img className="trash-icon" alt="" src="/trash.svg" />
      <img className="trash-icon1" alt="" />
      <img className="trash-icon2" alt="" />
      <img className="trash-icon3" alt="" />
    </div>
  );
};

export default MedicineReminders;
