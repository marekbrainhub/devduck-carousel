import React from 'react';
import Carousel from '@brainhubeu/react-carousel';

import Slide from './Slide/Slide.component';

import cardPhoto from './assets/marek_ch.jpg';
import slickSize from './assets/slicksize.png';
import carouselSize from './assets/carouselsize.png';
import drakeNotNice from './assets/drakenotnice.png';
import drakeNice from './assets/drakenice.png';
import carouselGif from './assets/carousel.gif';
import presentation from './assets/presentation.png';

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
  <Slide slideStyle='title' subtitle="a bit of history...">
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
  </Slide>,

  <Slide slideStyle='title' subtitle='wants'>
    <ul>
      <li>wants a library that does something specific</li>
      <li>wants it for something simple</li>
      <li>wants to throw it in into a project and forget about it</li>
    </ul>
  </Slide>,

  <Slide slideStyle='title' subtitle='requirements'>
    <ul>
      <li>the name must be simple</li>
      <li>the docs must be good</li>
      <li>the size and dependencies must be small</li>
    </ul>
  </Slide>,

  <Slide slideStyle='title' subtitle='end result'>
    <ul>
      <li>react-carousel</li>
      <li>what you saw earlier is what's on the first page of the docs</li>
      <li>11kB gzipped, 0 dependencies</li>
    </ul>
  </Slide>,

  <Slide slideStyle='regular' title="power user">
    <div style={{ width: '100%', textAlign: 'center', height: '500px' }}>
      <img src={carouselGif} alt="carousel gif" style={{ height: '100%' }} />
    </div>
  </Slide>,

  <Slide slideStyle='title' subtitle='wants'>
    <ul>
      <li>wants it to be a customisable</li>
      <li>wants it for something very specific and probably complicated</li>
      <li>will change to something else if your lib doesn't suit his needs</li>
    </ul>
  </Slide>,

  <Slide slideStyle='title' subtitle='requirements'>
    <ul>
      <li>has to support different levels of complexity</li>
      <li>readme has to be explcit about customization options</li>
      <li>moving parts need the ability to be replaced</li>
    </ul>
  </Slide>,

  <Slide slideStyle='title' subtitle='end result'>
    <ul>
      <li>four levels of complexity (none, default, visual, functional)</li>
      <li>usage as controlled component is introduced very early</li>
      <li>handlers for everything can be replaced</li>
    </ul>
  </Slide>,

  <Slide slideStyle='regular' title="anarchist 🔥">
    <div style={{ width: '100%', textAlign: 'center', height: '500px' }}>
      <img src={presentation} alt="carousel gif" style={{ height: '100%' }} />
    </div>
  </Slide>,

  <Slide slideStyle='title' subtitle='wants'>
    <ul>
      <li>wants to check edge cases</li>
      <li>wants to use your approach for something different</li>
      <li>likely will want to contribute</li>
    </ul>
  </Slide>,

  <Slide slideStyle='title' subtitle='requirements'>
    <ul>
      <li>don't get in the way</li>
      <li>don't prohibit 'undesirable' usage</li>
      <li>make it easy to contribute</li>
    </ul>
  </Slide>,

  <Slide slideStyle='title' subtitle='end result'>
    <ul>
      <li>you're looking at it :)</li>
    </ul>
  </Slide>,

  <Slide slideStyle='title' title='thank you!'>
    <p>
      feedback? get in touch: marek@brainhub.pl
    </p>

    <p>
      github.com/marekbrainhub/carousel-devduck
    </p>
  </Slide>
]
