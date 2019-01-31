import React from 'react';
import ColorPicker from './ColorPicker';
import FontSize from './FontSize';
import FontFamily from './FontFamily';
import BackgroundColorPicker from './BackgroundColorPicker';

const FontOptions = ({ handleChangeFontFamily, handleFontSizeChange, state, fonts, fontSize, isFetchingCategories }) => {
    return (
        <div>
            <h4>
                Propeties
            </h4>
            <FontFamily handleChangeFontFamily={handleChangeFontFamily} state={state} fonts={fonts} isFetchingCategories={isFetchingCategories} />
            <FontSize handleFontSizeChange={handleFontSizeChange} fontSize={fontSize} />
            <ColorPicker />
            <BackgroundColorPicker />
        </div>
    );
}

export default FontOptions;
