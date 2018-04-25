import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import actions from '../../actions';

export class Specialized extends Component {
  constructor(props) {
    super(props);
    props.fetchSpecializedData(props.match.params.name);
  }

  renderSpecializedData() {
    return (
      <Fragment>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                {this.props.display_name}
              </h1>
              <h2 className="subtitle">
                {this.props.id} - {this.props.rank}
              </h2>
            </div>
          </div>
        </section>
        <div className="container" style={{ marginTop: '10px' }}>
          <table className="table is-fullwidth is-striped">
            <thead>
              <tr>
                <th><abbr title="U.S. Dollar"><FontAwesomeIcon icon="dollar-sign" size="2x" /></abbr></th>
                <th><abbr title="Euro"><FontAwesomeIcon icon="euro-sign" size="2x" /></abbr></th>
                <th><abbr title="Bitcoin"><FontAwesomeIcon icon={['fab', 'bitcoin']} size="2x" /></abbr></th>
                <th><abbr title="Ethereum"><FontAwesomeIcon icon={['fab', 'ethereum']} size="2x" /></abbr></th>
                <th><abbr title="Litecoin"><div className="sprite-litecoin" /></abbr></th>
                <th><abbr title="Z-Cash"><div className="sprite-zcash" /></abbr></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.price_usd}</td>
                <td>{this.props.price_eur}</td>
                <td>{this.props.price_btc}</td>
                <td>{this.props.price_eth}</td>
                <td>{this.props.price_ltc}</td>
                <td>{this.props.price_zec}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        {this.props.loading ? <div>Loading...</div> : this.renderSpecializedData()}
      </Fragment>
    );
  }
}

Specialized.defaultProps = {
  id: '',
  display_name: '',
  rank: 0,
  price_usd: 0,
  price_btc: 0,
  price_eth: 0,
  price_ltc: 0,
  price_zec: 0,
  price_eur: 0,
};

Specialized.propTypes = {
  loading: PropTypes.bool.isRequired,
  // altCap: PropTypes.number,
  // bitnodesCount:PropTypes.number,
  // btcCap: PropTypes.number,
  // btcPrice: PropTypes.number,
  // dom: PropTypes.number,
  // totalCap: PropTypes.number,
  // volumeAlt: PropTypes.number,
  // volumeBtc: PropTypes.number,
  // volumeTotal: PropTypes.number,
  id: PropTypes.string,
  // type: PropTypes.string,
  // _id: PropTypes.string,
  price_btc: PropTypes.number,
  price_eth: PropTypes.number,
  price_ltc: PropTypes.number,
  price_zec: PropTypes.number,
  price_eur: PropTypes.number,
  price_usd: PropTypes.number,
  // market_cap: PropTypes.number,
  // cap24hrChange: PropTypes.number,
  display_name: PropTypes.string,
  // status: PropTypes.string,
  // supply: PropTypes.number,
  // volume: PropTypes.number,
  // price: PropTypes.number,
  // vwap_h24: PropTypes.number,
  rank: PropTypes.number,
  // alt_name: PropTypes.string,
  fetchSpecializedData: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  ...state.specializedReducer.data,
  ...state.flagsReducer,
});

const mapDispatchToProps = dispatch => ({
  fetchSpecializedData: name => dispatch(actions.fetchSpecializedData(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Specialized);
