const Facility = (props) => {
    return (<>
        <div className="m-auto p-4 text-white mb-4">
            <img src="" alt="ICON"/>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{props.title}</h3>
            <p className="font-medium">{props.text}</p>
        </div></>);
}

export default Facility;