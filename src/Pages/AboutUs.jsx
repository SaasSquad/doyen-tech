import aboutImg1 from "../assets/Images/aboutImg1.jpg"
import Feedback from "../Components/Feedback";
import Logos from "../Components/Logos";

const AboutUs = () => {

    return ( <>
    <div className="bg-white">
    <div className="pt-10 pb-10 pl-5 bg-[#153456] lg:pt-28 lg:pb-28 lg:pl-20">
        <h1 className="text-4xl font-extrabold text-white pb-5">About Us</h1>
        <p className="text-white"><span>Home</span> / <span>About Us</span></p>
    </div>
    <div className=" pl-5 pr-5 lg:flex lg:flex-row lg:px-20">
        <div className="pt-40">
            <h3 className="text-l font-bold pb-4 w-20 lg:text-xl lg:w-40 text-[#07294d]">About Us</h3>
            <p className="bg-yellow-500 ml-1 h-1 w-10 pt-0 lg:ml-0"></p>
            <h1 className="text-4xl font-extrabold pt-10 text-[#23252a] lg:text-5xl  lg:w-3/5">Welcome to Doyen Emerging Technology (DoyeneTech)!</h1>
            <p className="pt-5  lg:w-9/12 text-[#505050]">DoyeneTech is here to give you knowledge that you need in this competing global economy at the convenience of your chosen place and pace at your level while still maintaining the trend.
                <br />
                <br />
            DoyeneTech is designed to build for yourself, a profitable and enduring future through informed and seamless means and technologies with assistance of the emerging technology tutors.
                <br />
                <br />
            At DoyeneTech, we are poised to offer you great opportunities at a well subsidized amount through the convenience of your laptops/androids/iphones etc.
                <br />
                <br />
            Distance is no more a barrier to a quality learning.</p>
            <br />
            <button className="p-5 bg-yellow-500 rounded lg:py-3 text-[#07294d] font-bold lg:mt-10">Explore More</button>
        </div>
        <img src={aboutImg1} alt="" className="w-70 h-40 pl-40 lg:mt-80 lg:h-80 lg:pl-0"/>
    </div>
    <div className="pl-5 pr-5 pt-20 pb-20 lg:flex lg:flex-row lg:mx-20">
        <div className="lg:w-3/5 lg:mr-10">
            <h1 className="text-5xl text-gray-400">01</h1>
            <h2 className="text-2xl font-extrabold">Why Choose Us</h2>
            <br />
            <ul className="list-disc">
                <li>
                    <p className="text-gray-600">Your certificate will be globally recognised and the skills will be applicable anywhere in the world.</p>
                </li>
                <li>
                    <p className="text-gray-600">
                    There are qualified and adept professionals selected from all over the globe. Also, they are passionate about teaching.
                    </p>
                </li>
                <li>
                    <p className="text-gray-600">
                    There are wide array of academic and skill development programmes with alumni support.
                    </p>
                </li>
            </ul>
        </div>
        <br />
        <div className="lg:w-3/5 lg:mr-10">
            <h1 className="text-5xl text-gray-400">02</h1>
            <h2 className="text-2xl font-extrabold">Our Mission</h2>
            <br />
            <ul className="list-disc">
                <li className="text-gray-600">Our mission is to teach learners at various levels, prepare students for various tests, and offer extensive training on various skills.</li>
                <li className="text-gray-600">Our mission also includes provision of accessibility to quality and learning opportunities as well as scholarships and Job opportunities.</li>
            </ul>
        </div>
        <br />
        <div className="lg:w-3/5">
            <h1 className="text-5xl text-gray-400">03</h1>
            <h2 className="text-2xl font-extrabold">Our Vision</h2>
            <br />
            <p className="text-gray-600">Our vision is to become a leading online school globally.</p>
        </div>
    </div>
    <div className="bg-[#36516E] text-center items-center">
        <div className="pt-10 pb-10 lg:text-center lg:items-center lg:flex lg:justify-center lg:flex-col">
            <h1 className="text-3xl text-white font-bold pb-2 lg:border-b-2 lg:border-yellow-600">1250+</h1>
            <p className="bg-yellow-500 ml-44 h-1 w-14 pt-0 lg:hidden"></p>
            <p className="text-white pt-2">Student Enrolled</p>
        </div>
        <div className="pt-10 pb-10 lg:text-center lg:items-center lg:flex lg:justify-center lg:flex-col">
            <h1  className="text-3xl text-white font-bold pb-4 lg:border-b-2 lg:border-yellow-600">512+</h1>
            <p className="bg-yellow-500 ml-44 h-1 w-14 pt-0 lg:hidden"></p>
            <p className="text-white pt-2">People Certified</p>
        </div>
        <div className="pt-10 pb-10 lg:text-center lg:items-center lg:flex lg:justify-center lg:flex-col">
            <h1  className="text-3xl text-white font-bold pb-4 lg:border-b-2 lg:border-yellow-600">890+</h1>
            <p className="bg-yellow-500 ml-44 h-1 w-14 pt-0 lg:hidden"></p>
            <p className="text-white pt-2">Course Uploaded</p>
        </div>
        <div className="pt-10 pb-10 lg:text-center lg:items-center lg:flex lg:justify-center lg:flex-col">
            <h1   className="text-3xl text-white font-bold pb-4 lg:border-b-2 lg:border-yellow-600">170+</h1>
            <p className="bg-yellow-500 ml-44 h-1 w-14 pt-0 lg:hidden"></p>
            <p className="text-white pt-2">Global Teachers</p>
        </div>
    </div>
    <div className="pt-40 pb-40">images of tutors</div>
    <Feedback />
    <Logos />
    </div>
    </> );
}
 
export default AboutUs;