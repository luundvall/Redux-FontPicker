import * as types from './actionTypes';
import googleAPI from '../api';


function getAllFontsSuccess(fonts) {
    return { type: types.GET_ALL_FONTS_SUCCESS, fonts };
}

export function getAllFonts() {
    return function (dispatch) {
        return googleAPI.getAllFontsMock().then((fonts) => {
            dispatch(getAllFontsSuccess(fonts));
        }).catch(error => {
            throw (error);
        });
    };
}

export function getAllCategoriesSuccess(categories) {
    return { type: types.GET_ALL_CATEGORIES_SUCCESS, categories };
}

export function getAllCategories() {
    return function (dispatch) {
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
    return { type: types.CHANGE_FONTCOLOR_SUCCESS, rgb};
}

export function changeFontColor(rgb) {
    return function (dispatch) {
        return dispatch(changeFontColorSuccess(rgb));
    }
}