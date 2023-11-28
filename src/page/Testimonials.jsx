import React from 'react'
import Nav from '../Components/navigation/Nav'
import Footer from '../Components/footer/Footer'
import TestimonialComp from "../Components/testimonialcomp/TestimonialComp";
import './testipage.css'

export default function Testimonials(){
return(
    <div className="Testimonials">
<Nav/>
<TestimonialComp/>
<Footer/>
        </div>
)
}