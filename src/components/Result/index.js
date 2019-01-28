import React from 'react';
import InputArea from './inputArea';
import Choices from './choices';
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
        this.setState({inputValue: e.target.value})
    } 


    render() {
        const style = {
            backgroundColor: '#dee2e8',
            padding: '10px',
            height: '250px'
        }
        return (
            <div style={style}>
                <div>
                    <Choices
                        fontSize={this.props.fonts.fontSize}
                        fontFamily={this.props.fonts.fontFamily}
                        category={this.props.fonts.category}
                    />
                </div>
                <div>
                    <InputArea
                        handleChange={this.handleChange}
                        fontSize={this.props.fonts.fontSize}
                        fontFamily={this.props.fonts.fontFamily}
                        inputValue={this.state.inputValue}
                        color={this.props.fonts.color}
                    />
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
    actions: bindActionCreators(fontActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
