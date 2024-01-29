const ApplyProg = ({title,text,link}) => {
    return ( 
    <div className="lg:p-12 text-white bg-[#07294d]">
     <h2 className="mb-10 text-4xl font-medium">{title}</h2>
     <p className="mb-8">{text}</p>
     <button className="py-4 px-6 bg-yellow-400 flex m-auto text-center rounded text-[#07294d] font-medium"><a href={link}>Apply Now</a></button>
    </div>
     );
}
 
export default ApplyProg;