import React from 'react';

function WebDesign({wactive}) {
  return <div className='WebDesign' data-aos="fade-right">
  <div className='webitem'>
     <img src="youtube page.JPG" alt=""/>
     <div className='detail'>
     <h5>Youtube clone</h5>
     <p className='desc'>
     Made a clone of youtube using React JS & Node JS.
     Here is the snippet of the website. The website is completely
     responsive with features like uploading, playing and commenting.
     </p>
     <a href="#">Know more</a>
     </div>

  </div>
  <div className='webitem'>
  <img src="insta-main-page.JPG" alt=""/>
  <div className='detail'>
  <h5>Instagram clone</h5>
  <p className='desc'>
  Made a clone of Instagram using React JS & Node JS.
  Here is the snippet of the website.
  The website is completely
     responsive with features like posting and commenting on a post.
  </p>
  <a href="#">Know more</a>
  </div>

</div>
<div className='webitem'>
<img src="Gym-main.JPG" alt=""/>
<div className='detail'>
<h5>Gym Website</h5>
<p className='desc'>
Made a landing page for a  Gym website.
Website is completely responsive and with all the 
functionalities. It has also the option of emailing the customer response.
</p>
<a href="#">Know more</a>
</div>

</div>
  </div>

}

export default WebDesign;
