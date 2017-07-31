// Container
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Apollo
import { graphql, compose } from 'react-apollo';

// Components
import WesternSuburbsShow from '../components/western-suburbs-show';

class WesternSuburbs extends React.Component {
  render () {
    return <WesternSuburbsShow />;
  }
}

WesternSuburbs.propTypes = {
};

const WesternSuburbsWithApollo = compose()(WesternSuburbs);

export default connect(
  (state) => ({}),
  (dispatch) => ({}),
)(WesternSuburbsWithApollo);
