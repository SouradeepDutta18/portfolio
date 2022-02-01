import React from 'react';

function Others({otheractive}) {
  return <div className='others'  data-aos="fade-left">
  <div className='oitem'>
  <img src="ml.jpg" alt=""/>
  <div className='detail'>
  <h5>Credit Card Acceptance</h5>
  <p className='desc'>
   Made a classification model using Decision tree 
   to predict a credit card applicant based on his attributes
   probable defaulter or not. So that Bank approves credit Card
   only to genuine applicants not defaulters.
  </p>
  <a href="#">Know more</a>
  </div>
  </div>
  </div>
}

export default Others;
