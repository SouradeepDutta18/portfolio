import React from 'react'
import "./Specialization.css"
import SpItem from './SpItem'

function Specialization() {
    var sp_items=[
        {
         title:"Web Development",
         image:"globe-solid.svg",
         // eslint-disable-next-line no-multi-str
         desc:"Experienced in web development, making responsive web design. Proficient in making beautiful User \
         Interface using React JS. Experienced in backend using MERN stack."
        },
        {
         title:"Machine Learning",
         image:"chart-bar-solid.svg",
         // eslint-disable-next-line no-multi-str
         desc:"practiced and still learning machine learning. proficient with the algorithms like linear regression \
         logistic regression, SVM, decision tree etc."
        }
        ,
        {
         title: "Microsoft Office",
         image:"file-excel-solid.svg",
         // eslint-disable-next-line no-multi-str
         desc:"fluent with all the office tools like - ms excel, ms word, ms powerpoint etc. Skilled in making \
         business report and beautiful presentation for market and finance. "
        }
        ,
        {
         title:"Graphics Designer",
         image:"photo-video-solid.svg",
         desc:"I am deeply interested in Graphics designing. Proficient in using Softwares like Adobe Photoshope cc, figma"
        },
        {
          title:"Video Editor",
          image:"video-solid.svg",
          // eslint-disable-next-line no-multi-str
          desc:"I am a video editor by hobby. I do video editing on a regular basis for my youtube channel. \
          still learning it. "
        },
        {
          title: "Photography",
          image:"camera-solid.svg",
          // eslint-disable-next-line no-multi-str
          desc:"I love to do photography as I like to travel and capture memories. I also like to do wild life \
          photography."
        }

    ]
    return (
        <div className='Specialization' id="spcl">
            <div className='sp-intro'>Specialized in</div>
            <div className='sp-items'>
            {
                sp_items.map((item,key)=>{
                    return <SpItem title={item.title} image={item.image} desc={item.desc} key={key}/>
                })
            }
           
            </div>
        </div>
    )
}

export default Specialization
