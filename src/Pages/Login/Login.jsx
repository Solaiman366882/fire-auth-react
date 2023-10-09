import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../assets/css/loginRegister.css'
import titleImg from "../../assets/images/section-title.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const {userLogin,handleGoogleLogin}  = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    const handleSocialLogin = media => {

        media()
        .then( result => {
            console.log(result);
            Swal.fire(
                'Good job!',
                'Successfully login with google',
                'success'
              )
            navigate( location?.state ? location.state : '/')
        })
        
    }

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password =  e.target.pass.value;

        const validatePassword = (password)  =>{
            const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(.{6,})$/;
            return pattern.test(password);
        }

        if(!validatePassword(password)){
           return alert("Password is Invalid");
        }

        userLogin(email,password)
        .then(result => {

            //redirect after successfull login
            navigate( location?.state ? location.state : '/')
            console.log(result)
            Swal.fire(
                'Good job!',
                'Login Successfully',
                'success'
              )
        })
        .catch(err => console.log(err))

        console.log(email,password);
    }
    return (
        <div className=" min-h-[90vh] flex justify-center items-center py-8 w-full">
            <div>
                <div className="form-area w-full p-5 lg:p-5 lg:w-[800px] mx-auto">
                    <div className="form-wrapper">
                        <div className="title text-center mb-5">
                        <p className="text-pera-color mb-5">To get full access,</p>
                        <h2 className="text-title-heading font-semibold text-4xl mb-4">Login</h2>
                        <div className="service-img">
                            <img className="mx-auto" src={titleImg} alt="" />
                        </div>
                    </div>
                        <form onSubmit={handleLogin} action="">
                            <div className="single-input">
                                <input type="email" name="email" placeholder="Name" required/>
                            </div>
                            <div className="single-input">
                                <input type="password" name="pass" placeholder="Password" required/>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="c-btn w-full">Login</button>
                            </div>
                        </form>
                        <div>
                            
                            <button onClick={() => handleSocialLogin(handleGoogleLogin)} className="c-btn w-full mt-5">Login with google</button>

                            <div>
                                <p className="text-lg font-medium mt-5">Do not have an account, please <Link className="text-[#29395B] text-xl underline" to='/register'>Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;