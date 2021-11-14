import React from "react";

const Card = ({ element,deleteData,seteditId,addTestiminal,setTestiminal,setchangeText }) => {
  let newdate = new Date().toLocaleString()

  // console.log(element)
  return (  
    <>
      <div className="col-lg-6">
        <div className="single-testimonial mt-30 mb-30 text-center">
          <div className="testimonial-image">
            <img
              src="http://localhost:3000/assets/images/author-3.jpg"
              alt="Author"
            />
          </div>
          <div className="testimonial-content">
            <p className="text">{element.Testimonial_Description}</p>
            <h6 className="author-name">{element.Name}</h6>
            <span className="sub-title">{element.Post}</span>
          </div>
          <p className="author-name"> Created on : {element.Created_On}</p>
          <p className=" pl-10">Last update : {newdate}</p>
          <p className=" pl-10">Active : {element.Active}</p>
          <button type="button " class="btn btn-success m-1"
          onClick={() => {
            seteditId(element._id)
            setchangeText("EDIT")
            setTestiminal({
              ...addTestiminal,
              ["yourName"]: element.Name,
              ["post"]: element.Post,
              ["discription"]: element.Testimonial_Description,
              ["CreatedOn"]: element.Created_On,
              // ["activeValue"]:element.activeValue,
            })
          }}>
            Edit
          </button>
          <button
            type="button"
            class="btn btn-danger m-1 "
            onClick={(e) => {
              deleteData(element._id);
            }}
          >
           Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
