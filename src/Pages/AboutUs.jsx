import aboutImg1 from "../assets/Images/aboutImg1.jpg"
import Feedback from "../Components/Feedback";

const AboutUs = () => {

    return ( <>
    <div className="bg-white">
    <div className="pt-10 pb-10 pl-5 bg-blue-600">
        <h1 className="text-4xl font-extrabold text-white">About Us</h1>
        <p className="text-white"><span>Home</span> / <span>About Us</span></p>
    </div>
    <div className=" pl-5 pr-5">
        <div className="pt-40">
            <h3 className="text-l font-bold pb-5 border-b border-yellow-600 w-20">About Us</h3>
            <h1 className="text-4xl font-extrabold pt-10">Welcome to Doyen Emerging Technology (DoyeneTech)!</h1>
            <p className="pt-5">DoyeneTech is here to give you knowledge that you need in this competing global economy at the convenience of your chosen place and pace at your level while still maintaining the trend.
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
            <button className="p-5 bg-yellow-500">Explore More</button>
        </div>
        <img src={aboutImg1} alt="" className="w-70 h-40 pl-40"/>
    </div>
    <div className="pl-5 pr-5 pt-20 pb-20">
        <div>
            <h1 className="text-5xl text-gray-400">01</h1>
            <h2 className="text-2xl font-extrabold">Why Choose Us</h2>
            <br />
            <p className="text-gray-600">Your certificate will be globally recognised and the skills will be applicable anywhere in the world.
            There are qualified and adept professionals selected from all over the globe. Also, they are passionate about teaching.
            There are wide array of academic and skill development programmes with alumni support.</p>
        </div>
        <br />
        <div>
            <h1 className="text-5xl text-gray-400">02</h1>
            <h2 className="text-2xl font-extrabold">Our Mission</h2>
            <ul>
                <li className="text-gray-600">Our mission is to teach learners at various levels, prepare students for various tests, and offer extensive training on various skills.</li>
                <li className="text-gray-600">Our mission also includes provision of accessibility to quality and learning opportunities as well as scholarships and Job opportunities.</li>
            </ul>
        </div>
        <br />
        <div>
            <h1 className="text-5xl text-gray-400">03</h1>
            <h2 className="text-2xl font-extrabold">Our Vision</h2>
            <p className="text-gray-600">Our vision is to become a leading online school globally.</p>
        </div>
    </div>
    <div className="bg-[#36516E] text-center items-center">
        <div className="pt-10 pb-10">
            <h1 className="text-3xl text-white font-bold pb-4">1250+</h1>
            <p className="text-white pt-2">Student Enrolled</p>
        </div>
        <div className="pt-10 pb-10">
            <h1  className="text-3xl text-white font-bold pb-4">512+</h1>
            <p className="text-white pt-2">People Certified</p>
        </div>
        <div className="pt-10 pb-10">
            <h1  className="text-3xl text-white font-bold pb-4">890+</h1>
            <p className="text-white pt-2">Course Uploaded</p>
        </div>
        <div className="pt-10 pb-10">
            <h1   className="text-3xl text-white font-bold pb-4">170+</h1>
            <p className="text-white pt-2">Global Teachers</p>
        </div>
    </div>
    <div className="pt-40 pb-40">images of tutors</div>
    <Feedback />
    </div>
    </> );
}
 
export default AboutUs;