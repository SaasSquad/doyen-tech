import logo from "../assets/Images/Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <>
        <div className="mt-0 bg-[#07294d] w-screen px-3 text-white block relative lg:flex lg:flex-row lg:pb-10">
            <section className="pt-20 lg:w-3/12 lg:pr-10">
            <img src={logo} alt="" className="w-40 pb-10"/>
                <p>Doyen Emerging Technologies (doyeneTech) is  perfect for online courses and various skills development. It’s a complete solution with emerging technology tutors.</p>
                <ul className="flex flex-row pt-10 lg:pt-20">
                    <li><FontAwesomeIcon icon={faFacebook} className="text-2xl mr-10" />
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faInstagram} className="text-2xl mr-10"/>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faYoutube} className="text-2xl mr-10"/>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faTwitter} className="text-2xl mr-10"/>
                    </li>
                </ul>
            </section>
            <section  className="pt-20 lg:pt-20 lg:w-4/12 lg:pr-10">
                <h2 className="font-extrabold text-lg">DoyenTech Production and Services</h2>
                <ul className="pt-10">
                    <li>
                    <span className="text-xl text-[#F2BC03]">&gt; </span><span> Academic Programmes</span>
                    </li>
                    <li  className="pt-2.5 lg:pt-0">
                    <span className="text-xl text-[#F2BC03]">&gt; </span><span> Test Preparation</span>
                    </li>
                    <li  className="pt-2.5 lg:pt-0">
                    <span className="text-xl text-[#F2BC03]">&gt; </span><span>Skill Development Programmes</span>
                    </li>
                    <li  className="pt-2.5 lg:pt-0">
                    <span className="text-xl text-[#F2BC03]">&gt; </span><span>Application</span>
                    </li>
                    <li   className="pt-2.5 lg:pt-0">
                    <span className="text-xl text-[#F2BC03]">&gt; </span><span>Scholarships</span>
                    </li>
                    <li   className="pt-2.5 lg:pt-0">
                    <span className="text-xl text-[#F2BC03]">&gt; </span><span>Vacancies</span>
                    </li>
                </ul>
            </section>
            <section   className="pt-10 lg:pt-20 lg:w-3/12">
                <h2  className="font-extrabold text-lg">About DoyenTech</h2>
                <ul   className="pt-5">
                    <li>
                    <span className="text-xl text-[#F2BC03]">&gt; </span><span>Online Tutoring</span>
                    </li>
                    <li    className="pt-2.5 lg:pt-0">
                    <span className="text-xl text-[#F2BC03]">&gt; </span><span>Online Shop</span>
                    </li>
                    <li   className="pt-2.5 lg:pt-0">
                    <span className="text-xl text-[#F2BC03]">&gt; </span><span>Mobile App</span>
                    </li>
                    <li   className="pt-2.5 lg:pt-0">
                    <span className="text-xl text-[#F2BC03]">&gt; </span><span>Legal & Polices</span>
                    </li>
                    <li   className="pt-2.5 lg:pt-0">
                    <span className="text-xl text-[#F2BC03]">&gt; </span><span>FAQ</span>
                    </li>
                </ul>
            </section>
            <section   className="pt-10 pb-10 lg:pt-20 lg:w-3/12">
                <h2  className="font-extrabold text-lg">Contact Us</h2>
                <p   className="pt-5 lg:pb-10">Block 29, Flat CSB, LASU Senior Staff Quarters, Epe, Lagos, Nigeria.</p>
                <p   className="pt-1">+234-80-2059-6312</p>
                <p   className="pt-1">+234-81-6695-1881</p>
                <p   className="pt-1">info@doyenetech.com</p>
                <p   className="pt-1">www.doyenetech.com</p>
            </section>
        </div>
        <div className="bg-[#021D3A] text-white text-center pt-10 pb-10 lg:flex lg:flex-row lg:px-10">
        <span>Online Tutoring |&#160;</span><span> Online Shop |&#160;</span><span> Mobile App &#160;</span><br /><span> Legal & Policies |&#160; </span><span> FAQ</span>
        <br /> <br />
            <p className="pr-15">Doyen Emerging Technology 2020, All rights reserved.</p> <br />
        </div>
        </>
    )
}

export default Footer;