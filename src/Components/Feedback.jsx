import { useEffect, useState } from "react";

const  Feedback= () => {
    const [currentIndex, setCurrentIndex ] = useState(0);

    const divs = [<div key={1} className="flex flex-col mx-5 pl-20 pr-20 bg-[#334e6b] pt-10"> 
        <h1>Fantastic! Great Instructor!</h1>
        <p className="whitespace-normal text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cumque quod fugit magni esse, aperiam commodi </p>
    </div>, <div key={2} className="flex flex-col mx-5 pl-20 pr-20 bg-[#334e6b] pt-10">
                <h1>Fantastic! Great Instructor!</h1>
                <p className="flex whitespace-normal  text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cumque quod fugit magni esse, a</p>
            </div>, <div key={3} className="flex flex-col mx-5 pl-20 pr-20 bg-[#334e6b] pt-10">
                <h1>Fantastic! Great Instructor!</h1>
                <p className="whitespace-normal  text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cumque quod fugit magni esse, aperiam commodi quaera</p>
            </div>]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % divs.length);
        }, 10000);

        return () => {
            clearInterval(interval)
        }
    }, []);

    const showDiv = (index) => {
        setCurrentIndex(index)
    }
    return ( 
        <>
        <div className="bg-[#1B3A5B] pl-5 pr-5 text-white ">
        <div className="pt-10 ">
            <h3 className="text-xl font-bold">Feedback</h3>
            <h1 className="text-4xl font-bold pt-5 pb-10">What Student Say</h1>
        </div>
        <div className="flex flex-row whitespace-nowrap overflow-x-scroll pb-30">
            {divs.map((div) => div)}
        </div>
        </div>
        </>
     );
}
 
export default Feedback;