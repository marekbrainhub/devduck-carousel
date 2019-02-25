import React from 'react';

export default class SlideTitle extends React.PureComponent {
  render() {
    const { title, children } = this.props;

    return (
      <div className="carousel-slide">
        {title ? <h2>{title}</h2> : null}
        {children}
      </div>
    )
  }
}
