import React from 'react';

import Slide from './Slide/Slide.component';
import cardPhoto from './assets/marek_ch.jpg';

export default [
  <Slide 
    slideStyle='title'
    title='react-carousel'
    subtitle='and how it changed the world'
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
      <li>vi > vscode</li>
      <li>tabs > spaces</li>
    </ul>
  </Slide>
]
