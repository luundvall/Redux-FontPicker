import React from 'react';

const FontFamily = ({ handleChangeFontFamily, state, fonts }) => {

    const getOptions = (fonts) => {
        return fonts.map((font) => {
            return (
                <option key={font.family} value={font.family}> {font.family} </option>
            );
        });
    }

    return (
        <div>
            <div>
                <label>
                    Font-family
                </label>
            </div>
            <div>
                <select value={state.fontFamily} id="fontFamily" onChange={handleChangeFontFamily}>
                    {getOptions(fonts)}
                </select>
            </div>
        </div>
    );
}

export default FontFamily;
