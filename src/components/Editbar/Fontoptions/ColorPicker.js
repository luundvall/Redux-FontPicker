import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fontActions from '../../../actions';
import { SketchPicker } from 'react-color';
import enhanceWithClickOutside from 'react-click-outside';

class ColorPicker extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            color: {
                r: this.props.fonts.color.r,
                g: this.props.fonts.color.g,
                b: this.props.fonts.color.r
            },
            displayColorPicker: false
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleOnChange = (e) => {
        this.props.actions.changeFontColor({ r: e.rgb.r, g: e.rgb.g, b: e.rgb.b });
        this.setState({ color: { r: e.rgb.r, g: e.rgb.g, b: e.rgb.b } });
    }

    handleOnClick() {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }


    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.state.displayColorPicker && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ displayColorPicker: !this.state.displayColorPicker })
        }
    }



    render() {
        const { color, displayColorPicker } = this.state;

        const style = {
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: '700',
            padding: '5px',
            background: '#fff',
            borderRadius: '4px',
            height: '36px',
            width: '45px',
            border: '1px solid rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
            color: 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')' 
        }
        return (
            <div>
                    <div>
                        <div>
                            <label>
                                TEXT COLOR
                            </label>
                        </div>
                        <div>
                            <div onClick={this.handleOnClick} >
                                <span style={style} >A</span>
                            </div>
                        </div>
                    </div>
                    {displayColorPicker ?
                    <div ref={this.setWrapperRef} className="ColorPicker__Popover">
                        <SketchPicker color={color} onChange={this.handleOnChange} />
                    </div> :null}

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

export default enhanceWithClickOutside(connect(mapStateToProps, mapDispatchToProps)(ColorPicker));
