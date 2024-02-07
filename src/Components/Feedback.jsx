import eleanorImg from "../assets/Images/Eleanor.jpg"
import jamesImg from "../assets/Images/ALICE.jpg"
import monicaImg from "../assets/Images/SERGIO.jpg"

const  Feedback= () => {


    const divs = [<div key={1} ><div  className="flex flex-col mx-5 pr-20 bg-[#334e6b] pt-10 pb-10 pl-6 w-80"> 
        <h1 className="font-extrabold text-lg">Fantastic! Great Instructor!</h1>
        <p className="whitespace-normal text-lg">It a great life time experience having to take your lecture! it have really been life helping experience. Thanks Alot for your lectures. </p>
    </div>
    <div className="flex flex-row mt-10">
        <img src={jamesImg} alt="" className="h-20 rounded-full ml-10" />
        <span className="ml-5">
        <h1>
            James Smith
        </h1>
        <p>
            App developer
        </p>
        </span>
        
    </div>
    </div>, <div key={2}> <div  className="flex flex-col mx-5 pr-20 bg-[#334e6b] pt-10 pb-10 pl-6 w-80">
                <h1 className="font-extrabold text-lg">Such a great and incredible Lesson</h1>
                <p className="flex whitespace-normal  text-xl">I recomend this courses to everyone , and wish you guys luck with the New Studies. i highly recommended this to everyone.</p>
            </div>
            <div  className="flex flex-row mt-10">
            <img src={monicaImg} alt="" className="h-20 rounded-full ml-10" />
        <span className="ml-5">
        <h1>
            Monica Blew
        </h1>
        <p>
            UX Designer
        </p>
        </span>
            </div>
            </div>, <div key={3} ><div  className="flex flex-col mx-5 pr-20 bg-[#334e6b] pt-10 pb-10 pl-6 w-80">
                <h1 className="font-extrabold text-lg">I Enjoyed Every Lesson!</h1>
                <p className="whitespace-normal  text-xl">I am grateful for your wonderful course! Your tutors are the best and i am completely satisfied with the level of professional teaching </p>
            </div>
            <div  className="flex flex-row mt-10">
            <img src={eleanorImg} alt="" className="h-20 rounded-full ml-10" />
        <span className="ml-5">
        <h1>
            Eleanor Baker
        </h1>
        <p>
            CFO Apple Corp
        </p>
        </span>
            </div></div>]

    return ( 
        <>
        <div className="bg-[#1B3A5B] pl-5 pr-5 text-white ">
        <div className="pt-10 ">
            <h3 className="text-xl font-bold pb-4">Feedback</h3>
            <p className="bg-white ml-0 h-1 w-10 pt-0"></p>
            <h1 className="text-4xl font-bold pt-5 pb-10">What Student Say</h1>
        </div>
        <div className="flex flex-row overflow-x-auto no-scrollbar">
            {divs.map((div) => div)}
        </div>




        <div className="pl-40 pb-10 pt-10"><button className="w-4 h-4 bg-yellow-500 rounded-full"></button><button  className="w-4 h-4 bg-gray-500 rounded-full ml-5"></button><button  className="w-4 h-4 bg-gray-500 rounded-full ml-5"></button></div>
        </div>
        </>
     );
}
 
export default Feedback; 

