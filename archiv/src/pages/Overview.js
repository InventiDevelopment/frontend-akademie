import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOverview } from '../reducers/transactions';
import OverviewContent from '../components/Overview';

class Overview extends Component {
    render() {
        const { history, overview } = this.props;

        return(
            <React.Fragment>
                <OverviewContent />
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => {
    return {
      overview: getOverview(store)
    }
  }
  
export default connect(mapStateToProps)(Overview);