import React from 'react';
import ColorPicker from './ColorPicker';
import FontSize from './FontSize';
import FontFamily from './FontFamily';
import FontVariant from './FontVariant';
import BackgroundColorPicker from './BackgroundColorPicker';

const FontOptions = ({ handleChangeFontVariant ,handleChangeFontFamily, handleFontSizeChange, state, fonts, fontSize, isFetchingCategories, fontVariants }) => {
    return (
        <div>
            <h4>
                Propeties
            </h4>
            <FontFamily handleChangeFontFamily={handleChangeFontFamily} state={state} fonts={fonts} isFetchingCategories={isFetchingCategories} />
            <FontVariant handleChangeFontVariant={handleChangeFontVariant} fontVariants={fontVariants} />
            <FontSize handleFontSizeChange={handleFontSizeChange} fontSize={fontSize} />
            <ColorPicker />
            <BackgroundColorPicker />
        </div>
    );
}

export default FontOptions;
