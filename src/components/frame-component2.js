import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-component2.css";

const FrameComponent2 = () => {
  const navigate = useNavigate();

  const onArrowIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBlackWhiteLeafLogoRemovebgImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className="user-account-child">
      <div className="frame-parent3">
        <div className="frame-parent4">
          <div className="frame">
            <div className="div3">9:41</div>
          </div>
          <div className="rectangle-parent8">
            <div className="frame-child26" />
            <div className="frame-wrapper8">
              <div className="rectangle-parent9">
                <div className="frame-child27" />
                <div className="operation-radar-storm" />
                <div className="frame-child28" />
              </div>
            </div>
            <div className="label">
              <div className="lte3">LTE</div>
            </div>
            <div className="backdrop">
              <div className="rectangle-parent10">
                <div className="frame-child29" />
                <div className="frame-child30" />
              </div>
            </div>
          </div>
        </div>
        <header className="call-to-action">
          <div className="black-white-leaf-logo">
            <div className="owner-name">
              <div className="vector-container">
                <img
                  className="arrow-icon"
                  loading="lazy"
                  alt=""
                  src="/arrow-1.svg"
                  onClick={onArrowIconClick}
                />
                <div className="frame-wrapper9">
                  <div className="back-wrapper" onClick={onGroupContainerClick}>
                    <div className="back">Back</div>
                  </div>
                </div>
              </div>
              <b className="hello1">Hello</b>
            </div>
            <div className="black-white-leaf-logo-removebg-wrapper">
              <img
                className="black-white-leaf-logo-removebg-icon2"
                loading="lazy"
                alt=""
                src="/black-white-leaf-logoremovebgpreview-2@2x.png"
                onClick={onBlackWhiteLeafLogoRemovebgImageClick}
              />
            </div>
          </div>
        </header>
        <div className="doctor-appointments">
          <h1 className="mr-naveen-mehta">Mr. Naveen Mehta</h1>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
