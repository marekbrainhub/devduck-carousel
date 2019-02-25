import React from 'react';
import Carousel from '@brainhubeu/react-carousel';

import Slide from './Slide/Slide.component';

import cardPhoto from './assets/marek_ch.jpg';
import slickSize from './assets/slicksize.png';
import carouselSize from './assets/carouselsize.png';
import drakeNotNice from './assets/drakenotnice.png';
import drakeNice from './assets/drakenice.png';

const carouselContainerStyle = {
  height: '200px',
  padding: '1rem',
}

export default [
  <Slide 
    slideStyle='title'
    title='react-carousel'
    subtitle='and how we changed the world with it'
  />,
  <Slide
    slideStyle='about'
    title='Marek Chotoborski'
    subtitle='Fullstack Developer @ Brainhub'
    photo={cardPhoto}
  >
    <ul>
      <li>started with building nodejs irc bots 6 years ago</li>
      <li>linux > macos > windows</li>
      <li>frontend > backend</li>
      <li>vi > vscode</li>
      <li>tabs > spaces</li>
    </ul>
  </Slide>,
  <Slide slideStyle='title' subtitle="so how did we change the world?" />,
  <Slide slideStyle='title' subtitle="not much..." />,
  <Slide slideStyle='title'>
    <ul>
      <li>but we made our lives easier</li>
      <li>and we learned a lot about building open source</li>
      <li>and other people can benefit from it</li>
    </ul>
  </Slide>,
  <Slide slideStyle='title' subtitle="so I guess we did change it a bit for the better" />,
  <Slide slideStyle='regular' title="a bit of history...">
    <ul>
      <li>we needed a carousel</li>
      <li>we googled 'react carousel'</li>
      <li>we found slick</li>
    </ul>
  </Slide>,

  <Slide slideStyle='about' photo={slickSize} />,
  <Slide slideStyle='about' photo={drakeNotNice} />,
  <Slide slideStyle='about' photo={carouselSize} />,
  <Slide slideStyle='about' photo={drakeNice} />,

  <Slide slideStyle='title' subtitle="three target groups:" />,
  <Slide slideStyle='regular' title="just do it™">
    <div style={carouselContainerStyle}>
      <Carousel arrows>
        <img src="https://source.unsplash.com/640x200/?spring" alt="spring" />
        <img src="https://source.unsplash.com/640x200/?summer" alt="summer" />
        <img src="https://source.unsplash.com/640x200/?autumn" alt="autumn" />
        <img src="https://source.unsplash.com/640x200/?winter" alt="winter" />
      </Carousel>

      <pre>
        &lt;Carousel arrows><br />
          &lt;img src="https://source.unsplash.com/640x200/?spring" alt="spring" /><br />
          &lt;img src="https://source.unsplash.com/640x200/?summer" alt="summer" /><br />
          &lt;img src="https://source.unsplash.com/640x200/?autumn" alt="autumn" /><br />
          &lt;img src="https://source.unsplash.com/640x200/?winter" alt="winter" /><br />
        &lt;/Carousel><br/ >
      </pre>
    </div>
  </Slide>
]
