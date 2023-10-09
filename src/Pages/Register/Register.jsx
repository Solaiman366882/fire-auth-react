import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../assets/css/loginRegister.css'
import titleImg from "../../assets/images/section-title.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {

    const {createUser,handleGoogleLogin} = useContext(AuthContext);
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

    const handleRegister = e => {
        e.preventDefault();
        // const name  = e.target.name.value;
        const password  = e.target.password.value;
        const email  = e.target.email.value;
        // const img  = e.target.img.value;

        // reg expression for password validation
        const validatePassword = (password)  =>{
            const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(.{6,})$/;
            return pattern.test(password);
        }
        //password validation condition
        if(!validatePassword(password)){
           return Swal.fire(
            'Invalid Password',
            'Your password must have at least 6 character and uppercase letter and special character',
            'error'
          )
        }

        createUser(email,password)
        .then( () => {
            Swal.fire(
                    'Congrats',
                    'User created successfully',
                    'success'
                  )
            navigate( location?.state ? location.state : '/')
        })
        .catch( err => {
            // Swal.fire(
            //     'Sorry',
            //     'This email already exist',
            //     'error'
            //   )
            console.log(err);
            }
        )
    }
    return (
        <div className=" min-h-[90vh] flex justify-center items-center py-8 w-full">
        <div>
            <div className="form-area w-full p-3 lg:p-5 lg:w-[800px] mx-auto">
                <div className="form-wrapper">
                    <div className="title text-center mb-5">
                    <p className="text-pera-color mb-5">To get full access,</p>
                    <h2 className="text-title-heading font-semibold text-4xl mb-4">Register</h2>
                    <div className="service-img">
                        <img className="mx-auto" src={titleImg} alt="" />
                    </div>
                </div>
                    <form onSubmit={handleRegister} action="">
                        <div className="single-input">
                            <input type="text" name="name" placeholder="Your Name" />
                        </div>
                        <div className="single-input">
                            <input type="email" name="email" placeholder="Your Email" />
                        </div>
                        <div className="single-input">
                            <input type="password" name="password" placeholder="password" />
                        </div>
                        {/* <div className="single-input">
                            <input type="text" name="img" placeholder="Profile image link" />
                        </div> */}
                        <div className="text-center">
                            <button type="submit" className="c-btn w-full">Register</button>
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

export default Register;