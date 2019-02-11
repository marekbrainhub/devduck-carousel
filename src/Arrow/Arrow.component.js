import React from 'react';
import classNames from 'classnames';
import './Arrow.style.css';

export default class Arrow extends React.PureComponent {
  render() {
    const { left, right } = this.props;

    return (
      <div className={classNames({ 'carousel-arrow': true, left, right })}>
        {left ? '◀' : null}
        {right ? '▶' : null}
      </div>
    )
  }
}
