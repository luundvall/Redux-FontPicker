import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fontActions from '../../actions';

class CodeBlock extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            link: `<link href="https://fonts.googleapis.com/css?family="${this.props.fonts.fontFamily.replace(/\s/g, "+")}" rel="stylesheet">`,
            copied: false,
            css: `font-family: ${this.props.fontFamily}, sans-serif;`

        };
        this.handleOnCopy = this.handleOnCopy.bind(this);
    }
    handleOnCopy = () => {

    }

    render() {

        const codeBlockStyle = {
            backgroundColor: 'rgb(222, 226, 232, 0.2)',
            padding: '10px',
            marginTop: '10px'
        }

        const codeSnippetStyle = {
            backgroundColor: 'hsla(55,16%,86%,.6)',
            paddingBottom: '15px',
            paddingTop: '15px',
            paddingLeft: '10px',
            paddingRight: '10px'
        }

        return (
            <div style={codeBlockStyle} >
                <h5>Embed Font</h5>
                <p>To embed your selected fonts into a webpage, copy this code into the {'<head>'} of your HTML document.</p>
                <div style={codeSnippetStyle} className="mt-1">
                    <span>{this.state.link}</span>

                    <CopyToClipboard text={this.state.link}
                        onCopy={() => this.handleOnCopy}
                    >
                        <span style={{
                            float: 'right',
                            padding: '4px',
                            border: '1px solid #212529',
                            fontSize: '10px',
                            borderRadius: '2px',
                            cursor: 'pointer'
                        }}
                            className="glyphicon glyphicon-floppy-disk"
                            onClick={() => this.notifyUser}>
                        </span>
                    </CopyToClipboard>
                </div>
                <h5 className="mt-3">Specify in CSS</h5>
                <p>Use the following CSS rules to specify these families:</p>
                <div style={codeSnippetStyle}>
                    <span>{this.state.css}</span>

                    <CopyToClipboard text={this.state.css}
                        onCopy={() => this.handleOnCopy}
                    >
                        <span style={{
                            float: 'right',
                            padding: '4px',
                            border: '1px solid #212529',
                            fontSize: '10px',
                            borderRadius: '2px',
                            cursor: 'pointer'
                        }}
                            className="glyphicon glyphicon-floppy-disk"
                            onClick={() => this.notifyUser}>
                        </span>
                    </CopyToClipboard>
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

export default connect(mapStateToProps, mapDispatchToProps)(CodeBlock);

