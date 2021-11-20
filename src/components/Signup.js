import React from 'react';
// import studlogo from '../images/studlogo.jpg'
import img from '../images/background.jpg';

const Signup = () => {

  const myStyle={
    borderRadius: "15px"
  }
  const user = {
    fontSize: "50px"
  }
 

    return (
       <>  
<section className="vh-100 bg-image" src={img}>

  <form action="">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card cardm" style={{myStyle}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form action="">
              <div className="form-outline mb-4">
                <div class="row">
      <div class="col-15">
      <i class="fas fa-user fa-lg me-3 fa-fw" style={{user}}></i>
      </div>
      <div class="col-75">      
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
      </div>
    </div>             
  </div>           

 


<div className="form-outline mb-4">
                <div class="row">
      <div class="col-15">
      <i class="fas fa-envelope fa-lg me-3 fa-fw" style={{user}}></i>
      </div>
      <div class="col-75">      
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
      </div>
    </div>             
  </div>

<div className="form-outline mb-4">
                <div class="row">
      <div class="col-15">
      <i class="fas fa-lock fa-lg me-3 fa-fw" style={{user}}></i>
      </div>
      <div class="col-75">      
      <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
      </div>
    </div>             
  </div>

  <div className="form-outline mb-4">
                <div class="row">
      <div class="col-15">
      <i class="fas fa-lock fa-lg me-3 fa-fw" style={{user}}></i>
      </div>
      <div class="col-75">      
      <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Re-confirmation password" />
      </div>
    </div>             
  </div>

  <div className="form-outline mb-4">
                <div class="row">
      <div class="col-15">
      <i class="far fa-calendar-alt fa-2x" style={{user}}></i>
      </div>
      <div class="col-75">      
      <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Passing out Year" />
      </div>
    </div>             
  </div>

               
  <div class="d-flex flex-row align-items-center">
    <div class="row">
                    <label class="form-check-label" for="form2Example3">
                      <b>Area of Expertise:</b> 
                    </label> </div>
    </div>

                  <div class="row">
      
      <div class="col-30">
      <label class="form-control-check-label" id="form3Example1c" for="form2Example3">
                      Angular
                    </label>     <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />


      </div>
    </div>
    

    <div class="">
                  <div class="row">
      <div class="col-15">
      </div> {' '}
      <div class="col-30">
      <label class="form-control-check-label" id="form3Example1c" for="form2Example3">
                      ReactJS
                    </label>     <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />

      </div>
    </div>
    </div>
    <div class="">
                  <div class="row">
      <div class="col-15">
      
      </div> {' '}
      <div class="col-30">
      <label class="form-control-check-label" id="form3Example1c" for="form2Example3">
                      Vue
                    </label>     <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />


      </div>
    </div>
    </div>
                <div className="form-check d-flex justify-content-center mb-5">
                  <input
                    className="form-check-input me-2"                  
                    type="checkbox"
                    value=""
                    id="form2Example3cg"
                  />
                  <label className="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>            
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </form>
</section>
       </> 
    )
                
}

export default Signup
