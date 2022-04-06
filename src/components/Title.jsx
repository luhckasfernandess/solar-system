import React, { Component } from 'react';

// Resolvido problema com package-lock,json graças a ajuda do Jensen. Em esse arquivo meu lint ñ rodava no GitHub
class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{headline}</h2>
    );
  }
}

export default Title;
