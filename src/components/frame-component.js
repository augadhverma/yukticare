import { useCallback } from "react";
import "./frame-component.css";

const FrameComponent = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Insurance" to the project
  }, []);

  return (
    <div className="service-title-parent">
      <img className="service-title-icon" loading="lazy" alt="" />
      <footer className="frame-footer">
        <div className="frame-wrapper6" onClick={onGroupContainerClick}>
          <div className="rectangle-parent7">
            <div className="frame-child25" />
            <div className="frame-wrapper7">
              <div className="insurance-policies-group">
                <h1 className="insurance-policies1">
                  <p className="insurance">INSURANCE</p>
                  <p className="policies">POLICIES</p>
                </h1>
                <img
                  className="mjexmi53mdeylm4wmdeumzhqos5wni-icon"
                  loading="lazy"
                  alt=""
                  src="/22777087-67-mjexmi53mdeylm4wmdeumzhqos5wni4zmq-prev-ui-1@2x.png"
                />
              </div>
            </div>
            <div className="with-you-in">With you in life, beyond life</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FrameComponent;
