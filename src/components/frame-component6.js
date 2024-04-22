import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-component6.css";

const FrameComponent6 = () => {
  const navigate = useNavigate();

  const onBlackWhiteLeafLogoRemovebgImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className="black-white-leaf-background">
      <div className="black-white-leaf-background-inner">
        <div className="frame-parent10">
          <div className="frame-wrapper15">
            <div className="frame-parent11">
              <div className="frame-parent12">
                <div className="frame-wrapper16">
                  <img
                    className="frame-child43"
                    loading="lazy"
                    alt=""
                    src="/group-5.svg"
                  />
                </div>
                <div className="hello-container">
                  <div className="hello3">Hello,</div>
                  <div className="mr-mehta-frame">
                    <div className="mr-mehta2">Mr. Mehta</div>
                  </div>
                </div>
              </div>
              <div className="new-medicine-reminder-wrapper">
                <h2 className="new-medicine-reminder-container">
                  <p className="new">NEW</p>
                  <p className="medicine-reminder">MEDICINE REMINDER</p>
                </h2>
              </div>
            </div>
          </div>
          <div className="small-square-shape">
            <img className="i121-1-icon2" alt="" src="/2010i121-1@2x.png" />
            <img
              className="black-white-leaf-logo-removebg-icon4"
              loading="lazy"
              alt=""
              src="/black-white-leaf-logoremovebgpreview-2@2x.png"
              onClick={onBlackWhiteLeafLogoRemovebgImageClick}
            />
          </div>
        </div>
      </div>
      <img
        className="black-white-leaf-background-child"
        loading="lazy"
        alt=""
      />
    </section>
  );
};

export default FrameComponent6;
