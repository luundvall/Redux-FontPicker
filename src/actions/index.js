import * as types from './actionTypes';
import googleAPI from '../api';


function getAllFontsSuccess(fonts) {
    return { type: types.GET_ALL_FONTS_SUCCESS, fonts };
}

function getAllfontsRequest() {
    return { type: types.GET_FONTS_REQUEST };
}

export function getAllFonts() {
    return function (dispatch) {
        dispatch(getAllfontsRequest());
        return googleAPI.getAllFontsMock().then((fonts) => {
            dispatch(getAllFontsSuccess(fonts));
        }).catch(error => {
            throw (error);
        });
    };
}

function getAllCategoriesSuccess(categories) {
    return { type: types.GET_ALL_CATEGORIES_SUCCESS, categories };
}

function getAllCategoriesRequest() {
    return { type: types.GET_CATEGORIES_REQUEST };
}
export function getAllCategories() {
    return function (dispatch) {
        dispatch(getAllCategoriesRequest());
        return googleAPI.getAllCategoriesMock().then((categories) => {
            dispatch(getAllCategoriesSuccess(categories));
        }).catch(error => {
            throw (error);
        });
    }
}

function changeFontFamilySuccess(font) {
    return { type: types.CHANGE_FONTFAMILY_SUCCESS, font };
}

export function changeFontFamily(font) {
    return function (dispatch) {
        return dispatch(changeFontFamilySuccess(font));
    };
}

function changeFontSizeSuccess(fontSize) {
    return { type: types.CHANGE_FONTSIZE_SUCCESS, fontSize };
}

export function changeFontSize(fontSize) {
    return function (dispatch) {
        return dispatch(changeFontSizeSuccess(fontSize));
    };
}

function changeCategorySuccess(category) {
    return { type: types.CHANGE_CATEGORY_SUCCESS, category };
}

export function changeCategory(category) {
    return function (dispatch) {
        return dispatch(changeCategorySuccess(category));
    }
}

function changeFontColorSuccess(rgb) {
    return { type: types.CHANGE_FONTCOLOR_SUCCESS, rgb };
}

export function changeFontColor(rgb) {
    return function (dispatch) {
        return dispatch(changeFontColorSuccess(rgb));
    }
}

function changeBackgroundColorSuccess(rgb) {
    return { type: types.CHANGE_BACKGROUNDCOLOR_SUCCESS, rgb };
}

export function changeBackgroundColor(rgb) {
    return function (dispatch) {
        return dispatch(changeBackgroundColorSuccess(rgb));
    }
}

function changeFontVariantSuccess(fontWeight) {
    return { type: types.CHANGE_FONTVARIANT_SUCCESS, fontWeight };
}

export function changeFontVariant(fontWeight) {
    return function (dispatch) {
        return dispatch(changeFontVariantSuccess(fontWeight));
    }
}

function changeFontStyleSuccess(fontStyle) {
    return { type: types.CHANGE_FONTSTYLE_SUCCESS, fontStyle };
}

export function changeFontStyle(fontStyle) {
    return function (dispatch) {
        return dispatch(changeFontStyleSuccess(fontStyle));
    }
}