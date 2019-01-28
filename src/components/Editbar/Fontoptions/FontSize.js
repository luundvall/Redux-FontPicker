import React from 'react';

const FontSize = ({ handleFontSizeChange, fontSize }) => {

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
            <div>
                <label>
                    FONT SIZE
                    </label>
            </div>
            <div>
                <input style={style} type="number" min="9" max="248" value={fontSize} onChange={handleFontSizeChange} />
            </div>
        </div>
    );
}

export default FontSize;
