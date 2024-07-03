import { Animated } from "react-animated-css";
function atmBanking() {
  return (
    <>
      <Animated
        animateOnMount
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
        animationInDuration={200}
      >
        <div className="container">
          <div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
            <h1>ATM Banking</h1>
          </div>
          <div class="border border-success p-2 mb-2">
            <h3>ATM:</h3>
            <p>
              As a Bank of India ATM card holder, you can perform banking
              transactions round the clock...
            </p>
          </div>
          <div class="border border-success p-2 mb-2">
            <h3>Talking ATM</h3>
            <p>
              Bank of India’s Accessible and Talking ATM is one such example of
              technology innovation...
            </p>
          </div>
          <div class="border border-success p-2 mb-2">
            <h3>Cash Deposit Machine</h3>
            <p>
              Bank of India has deployed cash deposit machines having cash
              deposit facility and more..
            </p>
          </div>
          <div class="border border-success p-2 mb-2">
            <h3>Semi Automatic Passbook Printer</h3>
            <p>
              To increase customers' banking experience , Bank has introduced
              automation for Passbook printing...
            </p>
          </div>
          <div class="border border-success p-2 mb-2">
            <h3>Cheque Deposit Machine</h3>
            <p>
              To increase banking automation and provide more comfort to
              customers...
            </p>
          </div>
        </div>
      </Animated>
    </>
  );
}
export default atmBanking;
