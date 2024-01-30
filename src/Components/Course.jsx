const Course = ({ img_src, title, tutor, type, profile_logo }) => {
  return (
    <>
      <div className="bg-white rounded">
        <img src={img_src}/>
        <div className="lg:p-4">
          <p className="md:mt-4">*****</p>
          <p className="text-[#07294d] lg:text-2xl my-4 font-medium">{title}</p>
          <p className="mb-6">
            <img src={profile_logo} /> <span>{tutor}</span>
          </p>
        </div>
        <div className="flex">
          <span>AA</span>
          <span className="font-medium">{type}</span>
        </div>
      </div>
    </>
  );
};

export default Course;
