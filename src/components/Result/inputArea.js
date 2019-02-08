import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';

const Result = ({ handleChange, inputValue, fontSize, fontWeight, fontStyle, fontFamily, color}) => {

    const style = {
        fontSize: fontSize + 'px',
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        fontStyle: fontStyle,
        color: 'rgb(' + color.r + ',' + color.g +  ',' + color.b +')',
        resize: 'none',
        backgroundColor: 'transparent',
        width: '100%',
        border: 'none',
        outline: 'none',
        height: '140px'
    }

    return (
        <div>
            <FormGroup >
                <textarea
                    style={style}
                    name="inputText"
                    onChange={handleChange}
                    value={inputValue}
                    placeholder="Type something"
                    color= {'rgb(' + color.r + ',' + color.g +  ',' + color.b +')'}
                />
            </FormGroup>
        </div>
    );
}

export default Result;
