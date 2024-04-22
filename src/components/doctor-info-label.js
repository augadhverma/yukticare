import { useCallback } from "react";
import "./doctor-info-label.css";

const DoctorInfoLabel = () => {
  const onGroupButtonClick = useCallback(() => {
    // Please sync "Appointments" to the project
  }, []);

  return (
    <div className="doctor-info-label">
      <div className="rectangle-parent5">
        <div className="frame-child22" />
        <h1 className="dr-ruby">{`Dr. Ruby `}</h1>
        <b className="april-2024">24 April 2024</b>
      </div>
      <div className="with-you-in-life-logo-wrapper">
        <div className="with-you-in-life-logo">
          <div className="with-you-in-life-logo-inner">
            <div className="rectangle-parent6">
              <div className="frame-child23" />
              <h1 className="dr-rohan">{`Dr. Rohan `}</h1>
              <div className="june-2024-wrapper">
                <b className="june-2024">24 June 2024</b>
              </div>
            </div>
          </div>
          <button className="group-button" onClick={onGroupButtonClick}>
            <div className="frame-child24" />
            <b className="add-appointment">Add Appointment</b>
          </button>
        </div>
      </div>
      <div className="appointment-container">
        <div className="insurance-policies-parent">
          <div className="insurance-policies" />
          <div className="dr-vidhu-wrapper">
            <h1 className="dr-vidhu">{`Dr. Vidhu `}</h1>
          </div>
          <b className="june-20241">30 June 2024</b>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfoLabel;
