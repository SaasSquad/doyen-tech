const Tutor = ({name,role}) => {
    return ( <>
    <div className="tutor-img">
        <img src="https://i.ibb.co/z6z4z4z/tutor.jpg" alt="img"/>
    </div>
    <div className="tutor-info">
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="tutor-socials"></div>
    </div></> );
}
 
export default Tutor;