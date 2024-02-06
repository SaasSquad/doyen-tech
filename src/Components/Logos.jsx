import colorHat from "../assets/Images/color_hat.png"
import deptEdu from "../assets/Images/dept_edu.png"
import gradHat from "../assets/Images/grad_hat.png"
import moonBook from "../assets/Images/moon_book.png"
import sunBook from "../assets/Images/sun_book.png"
import sunhandBook from "../assets/Images/sunhand_book.png"


const Logos = () => {
    return ( <>
    <div className="flex flex-row overflow-x-auto no-scrollbar pt-10 pb-20">
            <img src={colorHat} alt="" className=" pr-20 pl-20"/>
            <img src={deptEdu} alt="" className="pr-20"/>
            <img src={gradHat} alt="" className="pr-20"/>
            <img src={moonBook} alt="" className="pr-20"/>
            <img src={sunBook} alt="" className="pr-20"/>
            <img src={sunhandBook} alt="" className="pr-20"/>
    </div>
    </> );
}
 
export default Logos;