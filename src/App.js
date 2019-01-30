import React from 'react';
import Editbar from './components/Editbar';
import Result from './components/Result';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Result
            fonts={this.props.fonts}
            />
          </div>
          <div className="col-4">
            <Editbar
              fonts={this.props.fonts}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
	return {
    fonts: state.fonts
	};
}

function mapDispatchToProps(dispatch) {
	return {
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
