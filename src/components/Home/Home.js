import React from 'react';
import './Home.css';
import fakeData from './../fakeData/index';
import { useState } from 'react';
import AboutCourse from '../AboutCourse/AboutCourse';
import Cart from './../Cart/Cart';

const Home = () => {
    const first6 = fakeData.slice(0,6);
  const [courses,setCourses]= useState(first6);
  const [cart, setCart]=useState([]);

  const handleAddCart = (course)=>{
    //  console.log("product added",course);
      const newCart = [...cart,course];
      setCart(newCart);

  }
    return (
        <div>
            <div className="container">
                <div className="home-content">
                    <div className="row">
                       <div className="col-sm-12 col-md-9">
                           <div className="row">
                           {
                                courses.map(course => <AboutCourse 
                                    course={course}
                                    handleAddCart={handleAddCart}
                                    > </AboutCourse>)
                            }

                           </div>

                        </div>
                        <div className="col-md-3 sidebar">
                            <div className="row">
                                <div className=" col-sm-12 col-md-12">
                                    <Cart cart={cart}></Cart>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;