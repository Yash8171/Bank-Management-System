import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";
import img1 from "./Allpics/loan.jpg";
import img2 from "./Allpics/deposit.jpg";
import img3 from "./Allpics/downloadForms.jpg";
import Marquee from "react-fast-marquee";
import img4 from "./Allpics/boLong.jpg";
import img5 from "./Allpics/Do.png";
import img6 from "./Allpics/Don't.png";

function Home() {
  return (
    <>
    <div className="conatainer-fluid">
      <h1 className="animate-charcter">Welcome to Bank of INDIA</h1></div>
      <hr/>
      <div className="container">
        <ImageSlider />
        <hr />
        <Marquee className="mar" pauseOnHover>
          ******These below IMAGES are clickable as per their names.******
        </Marquee>
        <br />
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="thumbnail text-center">
                <Link to="/loan">
                  <img src={img1} alt="..." />
                </Link>
                <div className="bottomCentered">
                  <Link to="/loan">
                    <h5>Loan Calculator</h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="thumbnail text-center">
                <Link to="/deposit">
                  <img src={img2} alt="..." />
                </Link>
                <div className="bottomCentered">
                  <Link to="/deposit">
                    <h5>Apply for FD</h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="thumbnail text-center">
                <Link to="/downloadforms">
                  <img src={img3} alt="..." />
                </Link>
                <div className="bottomCentered">
                  <Link to="/downloadforms">
                    <h5>Download Forms</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <img src={img4} alt="..." className="BOLONG" />
      <br />
      <div className="container col-12 p-4">
        <div className="row g-3">
          <div className="col-md-4">
            <div className="bor">
              <h2 className="heading2">BEWARE OF FRAUD CALLS</h2>
              <p className="para">
                It has been observed that many fake and fraudulent contact
                numbers are circulated on web posting as ´Banks Customer Care
                Number´. One such number found in web search is 06206419089.
                Customers are hereby cautioned to conduct their own
                investigations and analysis and should check the accuracy,
                reliability of the contact numbers before using any contact
                number received by the customer other than through our official
                channels such as Bank´s Website/authentic
                literature/Advertisements etc. Bank accepts no responsibility
                towards any loss incurred by the customer incidental to usage of
                any unauthentic contact number/channel.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="bor">
              <h2 className="heading2">PHISHING DO'S & DONT'S</h2>
              <p className="para">
                Phishing is a fraudulent attempt, usually made through
                emails/calls/SMS to capture your confidential data like
                NetBanking Id/Password, mobile no, email Id/Password, Card
                no/PIN/CVV no, etc.
              </p>
              <div className="scroll-container">
                
                <ul className="scroll-text">
                  <img src={img5} alt="..." />
                  <br />

                  <li>
                    Access your bank website only by typing the URL in address
                    bar of browser.
                  </li>
                  <li>
                    Always check the last log-in date and time in the post login
                    page.
                  </li>
                  <li>
                    Immediately change your passwords if you have accidentally
                    revealed your credentials.
                  </li>
                  <li>
                    Please report immediately on phishing[at]bankofindia[dot]com
                    if you receive any such email/SMS or Phone call.
                  </li>
                  <br />

                  <img src={img6} alt="..." />

                  <br />
                  <li>
                    Bank will never send you e-mails asking for confidential
                    details of your account/ PIN/ Password or personal details.
                  </li>
                  <li>
                    Never respond to e-mails/embedded links/calls asking you to
                    update or verify UserIDs/Passwords/Card Number/CVV etc.
                  </li>
                  <li>
                    Never click on any links in any e-mail to access the bank's
                    site.
                  </li>
                  <li>
                    Never enter login or other sensitive information in any pop
                    up window.
                  </li>
                  <li>
                    Do not be victim of SIM SWAPS, immediately investigate when
                    you notice that you are not receiving call and message or
                    getting SIM Registration fail. Keep your phone switched on
                    and check alerts from Bank of India.
                  </li>
                  <li>
                    Never respond to any SIM Swap Request even from mobile
                    operators.
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bor">
              <h2 className="heading2">SAFEGUARD (BEWARE OF PHISHING)</h2>
              <p className="para">
                Avoid fraudulent communications asking for your UserId,
                Password, Card No, Account No. etc. Fraudulent emails contain
                links of look-alike websites to capture your financial data.
                Bank will never send such communications to you asking for your
                personal/confidential data. Always visit Bank's site instead of
                clicking on the links provided in emails/third party websites.
                Do not respond to pop-up windows asking for your financial or
                confidential information.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="footer">
        <h7>Copyright @2022. All right reserverd</h7>
      </div>
    </>
  );
}
export default Home;
