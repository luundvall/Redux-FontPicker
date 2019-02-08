import React from 'react';
const FontVariant = ({ handleChangeFontVariant, fontVariants }) => {
    const style = {
        textAlign: 'center',
        padding: '5px',
        background: '#fff',
        borderRadius: '4px',
        width: '100%',
        height: '36px',
        border: '1px solid rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer'
    }

    const getFontVariants = (fontVariants) => {
        var letters = /^[A-Za-z]+$/;
        return fontVariants[0].variants.map((font, index) => {
            if(!font.match(letters) && font.length > 3) {
                var weight = font.substring(0,3);
                var style = font.substring(3);
                return (<option key={index}>{weight}  {style}</option>);
            } else {
            return (<option key={index}>{font}</option>);
            }
        })
    }
     return fontVariants.length > 0 ? 
     fontVariants[0].variants.length > 1 ?  
            <div>
            <div>
                <label>
                    Font-variant
                </label>
            </div>
            <div>
                <select style={style}  id="fontFamily" onChange={handleChangeFontVariant}>
                    <option defaultValue> - Select - </option>
                    {getFontVariants(fontVariants)}
                </select>
            </div>
        </div> : null
     : null;
}

export default FontVariant;
