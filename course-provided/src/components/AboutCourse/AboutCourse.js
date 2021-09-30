import React from 'react';
import './AboutCourse.css';
import { FaCartPlus} from 'react-icons/fa';

const AboutCourse = ({handleAddCart,course}) => {
    // console.log(props)
    const {course_name,course_instructor,course_rate,img,duration,available}=course;
    return (
       
       <div className="col-sm-12 col-md-6 my-3">
          <div className="custom-card">
            <img src={img} className="custom-img" alt="..." />
            <div className="card-content">
                <h5><span className="mb-2 fw-bold">Course:</span> {course_name}</h5>
                <p><span className="mb-2 fw-bold">Instructor:</span> {course_instructor}</p>
                <p><span className="mb-2 fw-bold">Available-seat:</span> {available}</p>
                <p><span className="mb-2 fw-bold">Duration:</span> {duration}</p>
                <p><span className="mb-2 fw-bold">course-rate:</span> {course_rate} taka only.</p>
                {/* <button className="btn custome-btn btn-block btn-lg mt-3" onClick="handleAddCart()">add to cart</button> */}
                <button className=" btn custome-btn btn-block btn-sm mt-3 " onClick={()=>handleAddCart(course)}> 
                {/* <i className="fa fa-money"></i> */}
                < FaCartPlus/>  add to cart</button>

            </div>
          </div>
        </div>
    
     
    );
};

export default AboutCourse;