import { FaGooglePlusG } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Qzone1 from "../../../assets/qZone1.png";
import Qzone2 from "../../../assets/qZone2.png";
import Qzone3 from "../../../assets/qZone3.png";



const RightNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FaGooglePlusG />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    GitHub
                </button>

            </div>
            <div className="p-4  mb-6">
                <h2 className="text-3xl mb-4">Find us on</h2>
                <a className="p-4 flex items-center text-lg border rounded-t-lg" href="">
                    <FaFacebook className="mr-3" ></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="p-4 flex items-center text-lg border-x" href="">
                    <FaTwitter className="mr-3" ></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className="p-4 flex items-center text-lg border rounded-b-lg" href="">
                    <FaInstagram className="mr-3" ></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            <div className="p-4  mb-6">
                <h2 className="text-3xl mb-4">Q Zone</h2>
                <img src={ Qzone1} alt="" />
                <img src={ Qzone2} alt="" />
                <img src={ Qzone3} alt="" />
                
            </div>
        </div>


    );
};

export default RightNav;