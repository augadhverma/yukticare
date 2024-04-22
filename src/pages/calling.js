import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./calling.css";

const Calling = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="calling">
      <div className="div1">9:41</div>
      <div className="rectangle-parent3">
        <div className="group-child7" />
        <div className="group-child8" />
        <div className="group-child9" />
      </div>
      <div className="lte1">LTE</div>
      <div className="rectangle-parent4">
        <div className="group-child10" />
        <div className="group-child11" />
      </div>
      <div className="calling-child" />
      <div className="calling-item" />
      <div className="calling-mobile-parent">
        <div className="calling-mobile">Calling mobile...</div>
        <div className="div2">102</div>
      </div>
      <div className="calling-inner" />
      <div className="i">i</div>
      <div className="ellipse-div" />
      <div className="calling-child1" />
      <div className="calling-child2" />
      <div className="calling-child3" />
      <img className="mic-fill-icon" alt="" src="/mic-fill.svg" />
      <img className="sound-max-fill-icon" alt="" src="/sound-max-fill.svg" />
      <div className="speaker">Speaker</div>
      <div className="mute">Mute</div>
      <div className="ellipse-parent" onClick={onGroupContainer2Click}>
        <div className="group-child12" />
        <img className="phone-fill-icon" alt="" src="/phone-fill@2x.png" />
        <div className="end">End</div>
      </div>
      <img className="group-icon" alt="" src="/group-19.svg" />
      <div className="keypad">Keypad</div>
      <img className="add-round-icon" alt="" src="/add-round.svg" />
      <div className="add">Add</div>
    </div>
  );
};

export default Calling;
