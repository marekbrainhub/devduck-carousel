import React from 'react';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import Arrow from './Arrow/Arrow.component';
import slides from './slides';

import './App.style.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onChange = value => this.setState({ value });

  onKeyDown = ({ key }) => {
    const { value } = this.state;
    if (key === 'ArrowLeft' && value > 0) {
      this.setState({ value: value-1 });
    }

    if ((key === 'ArrowRight' || key === ' ') && value < slides.length-1) {
      this.setState({ value: value+1 });
    }
  }

  render() {
    const { value } = this.state;

    return (
      <div id="wrapper">
        <Carousel
          arrowLeft={<Arrow left />}
          arrowRight={<Arrow right />}
          addArrowClickHandler
          draggable={false}
          slides={slides}
          value={value}
          onChange={this.onChange}
        />
      </div>
    )
  }
}
