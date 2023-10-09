import { Link } from "react-router-dom";
import '../../assets/css/loginRegister.css'
import titleImg from "../../assets/images/section-title.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const name  = e.target.name.value;
        const password  = e.target.password.value;
        const email  = e.target.email.value;
        const img  = e.target.img.value;

        console.log(name,email,password,img);
        createUser(email,password)
        .then( result => {
            result.user.updateProfile({
                displayName:name,
            })
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
            <div className="form-area w-[800px] mx-auto">
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
                        <div className="single-input">
                            <input type="text" name="img" placeholder="Profile image link" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="c-btn w-full">Register</button>
                            <p className="text-lg font-medium mt-5">Already have an account, please <Link className="text-[#29395B] text-xl" to='/login'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;