import { useRef } from "react";
import { Link } from "react-router-dom";

function Login() {

    let email = useRef();
    let pass = useRef();


    const submit = () => {
        if (email.current.value == "admin123" && pass.current.value == "admin123") {
            window.location.href = "/Product"
        } else {
            alert("Invalid Credentials");
        }
    }

    return (

        <div class="container d-flex justify-content-center align-items-center min-vh-100">


            <div class="row border rounded-5 p-3 bg-white shadow box-area">


                <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: "#103cbe" }}>
                    <div class="featured-image mb-3">
                        <img src="https://cdn-icons-png.flaticon.com/256/4861/4861722.png" class="img-fluid" style={{ width: "250px" }} />
                    </div>
                    <p class="text-white fs-2" style={{ fontfamily: 'Courier New', fontWeight: "600" }}>Be Verified</p>
                    <small class="text-white text-wrap text-center" style={{ width: "17rem", fontFamily: 'Courier New' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                </div>

                <div class="col-md-6 right-box">
                    <div class="row align-items-center">
                        <div class="header-text mb-4">
                            <h2>Hello,Again</h2>
                            <p>We are happy to have you back.</p>
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control form-control-lg bg-light fs-6" placeholder="Email address" ref={email} />
                        </div>
                        <div class="input-group mb-1">
                            <input type="password" class="form-control form-control-lg bg-light fs-6" placeholder="Password" ref={pass} />
                        </div>
                        <div class="input-group mb-5 d-flex justify-content-between">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="formCheck" />
                                <label for="formCheck" class="form-check-label text-secondary"><small>Remember Me</small></label>
                            </div>
                            <div class="forgot">
                                <small><Link to={'/ForgotPassword'}>Forget Password?</Link></small>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <button class="btn btn-lg btn-primary w-100 fs-6" onClick={submit} >Login</button>
                        </div>
                        <div class="input-group mb-3">
                            <button class="btn btn-lg btn-light w-100 fs-6"><img src="https://seeklogo.com/images/G/google-logo-28FA7991AF-seeklogo.com.png" style={{ width: "20px" }} class="me-2" /><small>Sign In with Google</small></button>
                        </div>
                        <div class="row">
                            <small>Don't have account? <Link to={'/SignUp'} >Sign up</Link></small>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;
