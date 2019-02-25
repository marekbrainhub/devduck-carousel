import React from 'react';

import SlideTitle from './Styles/SlideTitle.component';
import SlideAbout from './Styles/SlideAbout.component';
import SlideRegular from './Styles/SlideRegular.component';

import './Slide.style.css';

export default ({ slideStyle, children, ...rest }) => {
  let SlideStyle
  if (slideStyle === 'title') {
    SlideStyle = SlideTitle;
  } else if (slideStyle ==='about') {
    SlideStyle = SlideAbout;
  } else if (slideStyle ==='regular') {
    SlideStyle = SlideRegular;
  } else {
    SlideStyle = 'div'
  }

  return (
    <SlideStyle {...rest}>
      {children}
    </SlideStyle>
  );
}
