import React from 'react';

function Photography({pactive}) {
  var photos = [
   {dest:"image-grid/victoria.jpg"},
   {dest:"image-grid/st.pauls-1.jpg"},
   {dest:"image-grid/dakshineswar.jpg"},
   {dest:"image-grid/princep_ghat.jpg"},
   {dest:"image-grid/Howrah-bridge.jpg"},
   {dest:"image-grid/parkstreet.jpg"},
   {dest:"image-grid/Boron.jpg"},
   {dest:"image-grid/maa_durga.jpg"},
   {dest:"image-grid/North-kolkata.jpg"}
  ]
 
  return <div className='photography'>
  
     {
       photos.map((photo,key)=>{
         return <div className='p-item'><a href={photo.dest} target="_blank"><img src={photo.dest} alt="" /></a></div>
       })
     }
  
  
  
  
  </div>;
}

export default Photography;
