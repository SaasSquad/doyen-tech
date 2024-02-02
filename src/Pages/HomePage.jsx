import ApplyProg from "../Components/ApplyProg";
import Course from "../Components/Course";
import Facility from "../Components/Facility";
import Platforms from "../Components/Platforms";
import Tutor from "../Components/Tutor";
import facilityBook from "../assets/Images/facility-book.png";
import facilitycontract from "../assets/Images/facility-contract.png";
import facilitytable from "../assets/Images/facility-table.png";

const HomePage = () => {
  return (
    <>
      <section
        className="flex flex-col banner_fade relative font-bold h-[448px] bg-black bg-contain text-white px-4 md:px-12"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <h1 className="lg:text-5xl text-center font-bold mt-16 mb-9">
          Welcome to Doyen Emerging Technologies
        </h1>
        <p className="text-center lg:text-2xl mb-4">
          A place to invest in your future. DoyeneTech is here to give you
          knowledge that you need in this competing global economy at the
          convenience of your chosen place and pace at your level while still
          maintaining the trend.
        </p>
        <button className="py-4 px-6 text-[#072975] bg-yellow-500 flex m-auto text-center rounded">
          Contact Us
        </button>
      </section>
      <section className="lg:m-20">
        <p className="text-[#07294d] text-2xl">About us</p>
        <h2 className="lg:text-6xl mb-3 text-[#222429] font-bold">
          We make you a wonder at Doyen Emerging Technologies
        </h2>
        <ul className="opacity-50 font-semibold">
          <li>
            Our mission at doyeneTech is to teach learners at various levels:
            Nursery, Primary, Secondary, College of Education, Polytechnic and
            University.
          </li>
          <li>
            We prepare students for various tests such as TOEFL, ETSL, JSCE,
            WAEC, NECO, GCE, JAMB, NABTEC, A-Level, etc.{" "}
          </li>
          <li>
            We offer extensive training on various skills such as Software
            development, Cyber security, Project management, Coding,
            Internet-of-things (IoT), Graphic design, Digital marketing, etc.
          </li>
          <li>
            We provide accessibility to quality and experiential learning
            opportunities.
          </li>
          <li>
            We create and disseminate knowledge through different virtual
            platforms.
          </li>
          <li>
            Moreover, we provide information about scholarship and job
            opportunities.
          </li>
        </ul>

        <button className="py-4 mt-6 px-6 bg-yellow-400 flex text-center rounded">
          Explore More
        </button>
      </section>
      <section>
        <Platforms />
      </section>
      <section className="">
        <div className="text-white-400 flex lg:m-20">
          <ApplyProg
            title="Apply for academic programme"
            text="You can apply for any of our academic programmes: Nursery, Primary, Junior Secondary, Senior Secondary, College of Education, Polytechnic and University."
          />
          <ApplyProg
            title="Apply for skill development programme"
            text="You can apply for different skill development programmes: Cyber security, ICT, AI, Online Collaboration, Robotics, Catering, Tailoring, etc."
          />
        </div>
      </section>
      <section className="lg:m-20 m-16">
        <p className="text-[#07294d] text-2xl">Our Courses</p>
        <h3 className="lg:text-6xl text-2xl font-medium opacity-75 mb-4">
          Featured Courses
        </h3>
        <div className="block sm:flex lg:gap-4 sm:gap-2">
          <Course
            img_src="https://i.ibb.co/z6z4z4z/tutor.jpg"
            title="ASSEMBLY LANGUAGE PROGRAMMING"
            tutor="Dr. Mary Adedoyin"
          />
          <Course
            img_src="https://i.ibb.co/z6z4z4z/tutor.jpg"
            title="ASSEMBLY LANGUAGE PROGRAMMING"
            tutor="Dr. Mary Adedoyin"
          />
          <Course
            img_src="https://i.ibb.co/z6z4z4z/tutor.jpg"
            title="ASSEMBLY LANGUAGE PROGRAMMING"
            tutor="Dr. Mary Adedoyin"
          />
        </div>
      </section>
      <section className="bg-[#07294d] text-white-400 md:flex">
      <div className="md:w-1/2 flex items-center justify-center md:h-screen">
          {" "}
          <video src="" alt="Logo" className=""></video>
        </div>
        <div className="md:w-1/2 pb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl text-center text-white mb-12 md:mb-16 font-extrabold md:mt-12">
            Our Facilities
          </h2>
          <Facility
            img_src={facilitycontract}
            title="Global Certificates"
            text="We offer you reputable certificate(s) with global recognition."
          />
          <Facility
            img_src={facilitytable}
            title="Alumni Support"
            text="Your fulfilment after the successful completion of your programme is our duty. Don't worry, we are here for you!"
          />
          <Facility
            img_src={facilityBook}
            title="Books & E-Library"
            text="There are up-to-date books and an e-library at your fingertips.

"
          />
        </div>
        
      </section>
      <section className="tutors">
        <h3>Meet our tutors</h3>
        <p>
          Our tutors are qualified and adept professionals selected from all
          over the globe. Also, they are passionate about teaching. They are
          ready to take you from your present state or status to where you
          should be with our special plans designed for you. Our tutors will
          make you see the future and help you to get there. Our site has
          different tutors for all academic programmes, test preparation, and
          skill development. There are tutors for every learner/student. Also,
          there are live classes and recorded videos. There are tutors for
          nursery, primary, junior secondary, senior secondary, undergraduate
          and postgraduate subjects/courses and pricing is available upon
          request. No matter your level of study, you will find online tutors:
        </p>
        <div className="meet-tutor">
          <Tutor name="Dr. M. A.Adedoyin" role="Computer Skills Tutor" />
          <Tutor
            name="Pst. S. E. A. Adedoyin"
            role="Financial Accounting Tutor"
          />
          <Tutor name="Dr. P. W. Olugbemi" role="Agricultural Skills Tutor" />
          <Tutor name="Mr. Avoaja TY." role="English Tutor" />
        </div>
      </section>
    </>
  );
};

export default HomePage;
