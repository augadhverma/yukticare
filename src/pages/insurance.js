import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./insurance.css";

const Insurance = () => {
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

  return (
    <div className="insurance1">
      <div className="div3">9:41</div>
      <div className="rectangle-parent5">
        <div className="group-child13" />
        <div className="group-child14" />
        <div className="group-child15" />
      </div>
      <div className="lte2">LTE</div>
      <div className="rectangle-parent6">
        <div className="group-child16" />
        <div className="group-child17" />
      </div>
      <div className="hello-group" onClick={onGroupContainer2Click}>
        <div className="hello1">Hello,</div>
        <div className="mr-mehta1">Mr. Mehta</div>
      </div>
      <img
        className="insurance-child"
        alt=""
        src="/group-5.svg"
        onClick={onGroupIconClick}
      />
      <b className="insurance-policies1">
        <p className="sure-health-insurance">INSURANCE</p>
        <p className="sure-health-insurance">POLICIES</p>
      </b>
      <img className="insurance-item" alt="" />
      <div className="insurance-inner" />
      <img
        className="black-white-leaf-logo-removebg-icon1"
        alt=""
        src="/black-white-leaf-logoremovebgpreview-2@2x.png"
        onClick={onBlackWhiteLeafLogoRemovebgImageClick}
      />
      <img
        className="mjexmi53mdeylm4wmdeumzhqos5wni-icon1"
        alt=""
        src="/22777087-67-mjexmi53mdeylm4wmdeumzhqos5wni4zmq-prev-ui-1@2x.png"
      />
      <div className="with-you-in1">With you in life, beyond life</div>
      <div className="rectangle-parent7">
        <div className="group-child18" />
        <div className="sure-health-insurance-container">
          <p className="sure-health-insurance">
            <b>Sure Health Insurance</b>
          </p>
          <p className="zero-hassle-health">
            Zero hassle health policies starting @₹19/day*
          </p>
        </div>
        <div className="rectangle-parent8">
          <div className="group-child19" />
          <b className="check-policy">Check Policy</b>
        </div>
      </div>
      <div className="rectangle-parent9">
        <div className="group-child18" />
        <div className="sure-health-insurance-container">
          <p className="sure-health-insurance">
            <b>LifeStyle Health Insurance</b>
          </p>
          <p className="zero-hassle-health">
            Online Health Insurance Plans - Upto 18% Discount*
          </p>
        </div>
        <div className="rectangle-parent8">
          <div className="group-child19" />
          <b className="check-policy">Check Policy</b>
        </div>
      </div>
      <div className="rectangle-parent11">
        <div className="group-child18" />
        <div className="sure-health-insurance-container">
          <p className="sure-health-insurance">
            <b>Apna Health Insurance</b>
          </p>
          <p className="zero-hassle-health">
            Easy Online Health Insurance for your family - Upto 20% Discount*
          </p>
        </div>
        <div className="rectangle-parent8">
          <div className="group-child19" />
          <b className="check-policy">Check Policy</b>
        </div>
      </div>
      <div className="insurance-child1" />
      <div className="insurance-child2" />
    </div>
  );
};

export default Insurance;
