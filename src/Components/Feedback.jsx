import eleanorImg from "../assets/Images/Eleanor.jpg"
import jamesImg from "../assets/Images/ALICE.jpg"
import monicaImg from "../assets/Images/SERGIO.jpg"

const  Feedback= () => {


    const divs = [<div key={1} ><div  className="flex flex-col mx-5 pr-20 bg-[#334e6b] pt-10 pb-10 pl-6 w-80"> 
        <h1>Fantastic! Great Instructor!</h1>
        <p className="whitespace-normal text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cumque quod fugit magni esse, aperiam commodi </p>
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
                <h1>Fantastic! Great Instructor!</h1>
                <p className="flex whitespace-normal  text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cumque quod fugit magni esse, a</p>
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
                <h1>Fantastic! Great Instructor!</h1>
                <p className="whitespace-normal  text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cumque quod fugit magni esse, </p>
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
            <h3 className="text-xl font-bold">Feedback</h3>
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

