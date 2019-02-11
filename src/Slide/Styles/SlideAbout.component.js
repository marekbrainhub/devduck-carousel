import React from 'react';

export default class SlideAbout extends React.PureComponent {
  render() {
    const { title, subtitle, photo, children } = this.props;

    return (
      <div className="carousel-slide central about">
        <div className="card">
          {photo ? <img src={photo} alt="Card"/> : null}
          <div className="card-name">
            <div className="card-title">
              {title ? <h2>{title}</h2> : null}
              {subtitle ? <h3>{subtitle}</h3> : null}
            </div>
            {children}
          </div>
        </div>
      </div>
    )
  }
}
