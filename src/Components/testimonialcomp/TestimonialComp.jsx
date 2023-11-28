import React from 'react'
import Data from './Data'
import Card from './Card'
import Img1 from '../images/watchstrap-removebg-preview.png'
import "./TestimonialComp.css"


const TestimonialComp=()=>{

    return(
        <div className="testimonial2">
            <div className="testi-header">
                <h1>What we value</h1>
                <p>We value time and satsfaction more than anything. Dont take our talk for it 
                    Expolre our testimonials from various countries around the continent. They didnt 
                    regret buying from us they are alwayes happy.</p>
            </div>
            <div className="hangwatch">
<img src={Img1} style={{width:"250px", height:"100%"}} alt=""/>
                </div>
            <main className="alltestimonials">
                <h1>TESTIMONIALS</h1>
                <ul>
                    {
                     Data.map(each=>{
                        return(
                            <Card key={each.vid} items={each}/>
                        )
                     })
                    }
                </ul>
                </main>
        </div>
    )
}
export default TestimonialComp