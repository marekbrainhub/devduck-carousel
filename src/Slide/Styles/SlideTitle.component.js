import React from 'react';

export default class SlideTitle extends React.PureComponent {
  render() {
    const { title, subtitle, children } = this.props;

    return (
      <div className="carousel-slide central title">
        {title ? <h1>{title}</h1> : null}
        {subtitle ? <h3>{subtitle}</h3> : null}
        {children}
      </div>
    )
  }
}
