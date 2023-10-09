import { Link } from "react-router-dom";
import '../../assets/css/loginRegister.css'
import titleImg from "../../assets/images/section-title.png";


const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password =  e.target.pass.value;

        console.log(email,password);
    }
    return (
        <div className=" min-h-[90vh] flex justify-center items-center py-8 w-full">
            <div>
                <div className="form-area w-[800px] mx-auto">
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
                                <p className="text-lg font-medium mt-5">Do not have an account, please <Link className="text-[#29395B] text-xl" to='/register'>Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;