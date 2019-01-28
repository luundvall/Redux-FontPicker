import React from 'react';
import ColorPicker from './ColorPicker';

const FontOptions = ({ handleChangeFontFamily, handleFontSizeChange, handleFontColorChange, handleOnClickColorChange, state, fonts, fontSize, displayColorPicker }) => {

    const getOptions = (fonts) => {

        return fonts.map((font, index) => {
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
        width: '45px',
        border: '1px solid rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
    }

    return (
        <div>
            <h4>
                Propeties
            </h4>
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
            <div>
                <div>
                    <label>
                        FONT SIZE
                    </label>
                </div>
                <div>
                    <input style={style} type="number" min="9" max="248" value={fontSize} onChange={handleFontSizeChange} />
                </div>
            </div>
            <ColorPicker />
        </div>
    );
}

export default FontOptions;
