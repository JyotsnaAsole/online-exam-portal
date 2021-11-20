import React from 'react'
import userl from "../images/user_1.png"

const Login = () => {
  const myStyle={
    borderRadius: "15px"
  }

    const user = {
    fontSize: "50px"
  }
    return (
        <> 
        <section className="vh-100 bg-image" >

<form action="">
<div className="mask d-flex align-items-center h-100 gradient-custom-3">
  <div className="container h-100">
    
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-9 col-lg-7 col-xl-6">
        <div className="card cardm" style={{myStyle}}>
          <div className="card-body p-5">
          <img src={userl} className="userlogin" alt="login"/>
            <h2 className="text-uppercase text-center mb-5">User Login</h2>

            <form action="">               
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

              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
              </div>
                          
              </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</form>
</section>                   
{/* <section className="vh-100 bg-image" >
  <form action="">
  <div className="mask d-flex align-items-center h-5  gradient-custom-3">
    <div className="container h-5 ">
      <div className="row d-flex justify-content-center align-items-center h-5">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card cardm" style={{myStyle}}>
            <div className="card-body p-5 ">
            <img src={userlogin} className="userlogin" alt="login"
            height={350}
            width={700}/> 
              <h3 className="text-uppercase text-center mb-5 heading">User Login</h3>
              <form action="">
              <div className="form-outline mb-2">
                <div class="row">
      <div class="col-15">
      <i class="fas fa-envelope fa-lg me-3 fa-fw" style={{user}}></i>
      </div>
      <div class="col-75">      
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
      </div>
    </div>             
  </div>           


<div className="form-outline mb-2">
                <div class="row">
      <div className="col-15">
      <i className="fas fa-lock fa-lg me-3 fa-fw" style={{user}}></i>
      </div>
      <div className="col-75">      
      <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
  
      </div>

    </div>             
  </div>
  <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4">Login</button>
  </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </form>
</section> */}
       
</>
    )
}

export default Login


  

               
  
                  
    

   
   
                

                

               
             
                