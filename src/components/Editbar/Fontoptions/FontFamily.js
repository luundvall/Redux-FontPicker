import React from 'react';

const FontFamily = ({ handleChangeFontFamily, state, fonts }) => {

    const getOptions = (fonts) => {
        return fonts.map((font) => {
            return (
                <option key={font.family} value={font.family}> {font.family} </option>
            );
        });
    }

    const style = {
        textAlign: 'center',
        padding: '5px',
        background: '#fff',
        borderRadius: '4px',
        height: '36px',
        border: '1px solid rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer'
    }

    return (
        <div>
            <div>
                <label>
                    Font-family
                </label>
            </div>
            <div>
                <select style={style} value={state.fontFamily} id="fontFamily" onChange={handleChangeFontFamily}>
                <option defaultValue> - Select - </option>
                    {getOptions(fonts)}
                </select>
            </div>
        </div>
    );
}

export default FontFamily;
