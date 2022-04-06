import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Resolvido problema com package-lock,json graças a ajuda do Jensen. Em esse arquivo meu lint ñ rodava no GitHub
class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{headline}</h2>
    );
  }
}

Title.defaultProps = {
  headline: 'Planetas',
};

Title.propTypes = {
  headline: PropTypes.string,
};

export default Title;
