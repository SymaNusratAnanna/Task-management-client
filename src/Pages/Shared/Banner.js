import React from 'react';
import bannner1 from '../../assests/bann1.jpg';
import bannner2 from '../../assests/bann2.jpg';
import bannner3 from '../../assests/bann3.jpg';

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full h-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src={bannner1} class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src={bannner2} class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src= {bannner3} class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
 
  </div>
</div>
    
    );
};

export default Banner;