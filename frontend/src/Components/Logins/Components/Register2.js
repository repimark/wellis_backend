import React from "react";

const Register2 = () => {
  return (
    <>
      <section className="vh-100" style={{color:"white"}}>
        <div className="container-fluid" style={{color:"white"}}>
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="px-5 ms-xl-4" style={{color:"white"}}>
                <i
                  className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                  style={{color: "#709085"}}
                ></i>
                <span className="h1 fw-bold mb-0">Cicatábla</span>
              </div>

              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5" style={{color:"white"}}>
                <form style={{width: "23rem"}}>
                  <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>
                    Log in
                  </h3>

                  <div className="form-outline mb-4" style={{color:"white"}}>
                    <input
                      type="email"
                      id="form2Example18"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" for="form2Example18">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example28"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" for="form2Example28">
                      Password
                    </label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-info btn-lg btn-block" type="button">
                      Login
                    </button>
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-muted" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <p>
                    Don't have an account?{" "}
                    <a href="#!" className="link-info">
                      Register here
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="https://st.depositphotos.com/1053746/4787/i/950/depositphotos_47872419-stock-photo-sculpture-of-adam-and-eve.jpg"
                alt="Login image"
                className="w-100 vh-100"
                style={{objectFit: "cover", objectPosition: "center"}}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register2;
