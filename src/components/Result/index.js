import React from 'react';
import InputArea from './inputArea';
import Choices from './choices';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fontActions from '../../actions';
import HowToUse from './HowToUse.js'
import CodeBlock from './CodeBlock';

class Result extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            inputValue: '',
            fontFamily: this.props.fonts.fontFamily,
            fontSize: this.props.fonts.fontSize,
            category: this.props.fonts.category,
            displayCode: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.displayCode = this.displayCode.bind(this);
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    displayCode = (e) => {
        this.setState({ displayCode: !this.state.displayCode });
    }


    render() {
        const style = {
            backgroundColor: 'rgb(222, 226, 232, 0.2)',
            padding: '10px',
            height: '250px'
        }

        return (<div>


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
                <HowToUse displayCode={this.displayCode} />
            </div>

            {this.state.displayCode ?
                <CodeBlock fontFamily={this.props.fonts.fontFamily}/>
            : null}
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
