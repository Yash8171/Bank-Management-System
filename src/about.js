import { Animated } from "react-animated-css";
function About() {
  return (
    <>
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="container">
          <div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
            <h3>About Bank of India</h3>
          </div>
          <br />
          <p>
            Bank of India is one of the leading public sector banks of the
            country. The Bank is a listed entity and the Government of India
            holds 83.49 percent in Bank’s total share capital. The Bank, having
            its headquarters in India. Bank of India is the first large public
            sector bank in the country to have implemented 100% core banking
            solution. The Bank has received several awards and recognition for
            its prowess in technology, digital banking, financial inclusion,
            MSME and development of human resources.
          </p>
        </div>
      </Animated>
    </>
  );
}
export default About;
