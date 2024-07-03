import Marquee from "react-fast-marquee";
import { Animated } from "react-animated-css";
function Contact() {
  return (
    <>
      <div className="container">
        <Animated
          animationIn="bounceInDown"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
            <h2>Conatct Us</h2>
          </div>
          <br />
          <Marquee className="mar" pauseOnHover>
            ******These numbers only work on WORKING DAYS******
          </Marquee>
          <br />
          <ul>
            <li>1800 222 XXX / 1800 425 1X XX (In India-Toll Free)</li>
            <li>+91-80-61817XXX (Chargeable)</li>
            <li>ebankingapplication[At the rate]bankofindia[Dot]bank</li>
          </ul>
        </Animated>
      </div>
    </>
  );
}
export default Contact;
