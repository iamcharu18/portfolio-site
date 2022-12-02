import React from 'react';
import Typical from 'react-typical';
import profileImg from "../../assets/profileImg.png"
import "./Header.css"

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-content'>
                <h1>Hi! Am </h1>
                <h2 className='fullname'>Sobhan Sai Kuriti</h2>
                <h2>I'm a {""}
                    <Typical steps={["Full Stack Developer🚀", 3000, "Machine Learning Engineer💡", 3000]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut velit sodales,
                    facilisis nisl ac, dictum lectus. Quisque tempor faucibus quam, id sagittis elit ullamcorper
                    ut. Proin nec velit eu elit congue feugiat vitae vitae enim. Cras ac ipsum nec ante porttitor
                    semper ut in orci. Duis quis quam quis nunc mattis sagittis.
                </p>
                {/* Payment links */}
                <div className='header-payment-container'>
                    <button>Hire Me</button>
                    <i className="fa-brands fa-cc-paypal"></i>
                    <i className="fa-brands fa-cc-visa"></i>
                    <i className="fa-brands fa-cc-mastercard"></i>
                    <i className="fa-brands fa-cc-amex"></i>
                </div>
            </div>
            <div className='header-img-container'>
                <img src={profileImg} alt="Profile" />
                <div className='circle-1'></div>
                <div className='circle-2'></div>
            </div>
        </div>
    )
}

export default Header;