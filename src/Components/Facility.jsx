const Facility = (props) => {
    return (<>
        <div className="m-auto text-white mb-4 md:mb-8 md:flex md:p-0">
            <div><img src={props.img_src} alt="ICON" className="w-24 mb-4 p-3 md:p-0"/></div>
            <div className="px-4 "><h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{props.title}</h3>
            <p className="font-medium">{props.text}</p></div>
        </div></>);
}

export default Facility;