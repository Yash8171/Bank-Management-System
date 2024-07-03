import Marquee from "react-fast-marquee";
function deposit(){
    const handleClick = () => {
        alert('Your Application Submitted Successfully!');
    };
    return(
        <>
        
        <div className="container-fluid">
        <div className="row bg-success text-light text-center">
            <div className="col-12 p-4">
        <h2 style={{fontWeight: "bold"}}>Apply for Fixed Deposit</h2>
            </div>
        </div>
        <div className="row bg-dark text-light">
            <div className="col-12 p-4">
            <form class="row g-3">
  <div class="col-md-6">
    <label for="inputFirstname" class="form-label">First Name</label>
    <input type="text" class="form-control" id="inputFirstname"/>
  </div>
  <div class="col-md-6">
    <label for="inputlastName" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="inputlastName"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Andhra Pradesh</option>
      <option>Arunachal Pradesh</option>
      <option>Assam</option>
      <option>Bihar</option>
      <option>Chhattisgarh</option>
      <option>Goa</option>
      <option>Gujarat</option>
      <option>Himachal Pradesh</option>
      <option>Jharkhand</option>
      <option>Karnataka</option>
      <option>Kerala</option>
      <option>Madhya Pradesh</option>
      <option>Maharashtra</option>
      <option>Manipur</option>
      <option>Meghalaya</option>
      <option>Mizoram</option>
      <option>Nagaland</option>
      <option>Odisha</option>
      <option>Punjab</option>
      <option>Rajasthan</option>
      <option>Sikkim</option>
      <option>Tamil Nadu</option>
      <option>Telangana</option>
      <option>Tripura</option>
      <option>Uttar Pradesh</option>
      <option>Uttarakhand</option>
      <option>West Bengal</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>

  <div class="col-md-6">
    <label for="inputAmount" class="form-label">Amount</label>
    <input type="number" class="form-control" id="inputAmount"/>
  </div>
  <div class="col-md-6">
    <label for="inputTenure" class="form-label">Tenure(in years)</label>
    <input type="number" class="form-control" id="inputTenure"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button>
  </div>
</form>
            </div>
        <Marquee><h3 align='center'>****You will be recieving Call after sumbitting this form****</h3></Marquee>
        </div>
        </div>
        </>
    )
}
export default deposit