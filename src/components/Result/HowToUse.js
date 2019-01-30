

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fontActions from '../../actions';

class Result extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            inputValue: '',
            fontFamily: this.props.fonts.fontFamily,
            fontSize: this.props.fonts.fontSize,
            category: this.props.fonts.category
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }


    render() {
        const buttonStyle = {
            backgroundColor: 'rgb(255, 223, 1)',
            appearance: 'none',
            background: '#ffdf01',
            borderRadius: '3px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '13px',
            padding: '6px 10px',
        }

        
        return (
            <div style={{ textAlign: 'right' }}>
                <button style={buttonStyle} onClick={this.props.displayCode}>
               <b>How to use {'</>'}</b>  
            </button>
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
        actions: bindActionCreators(fontActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
