import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function columnReducer(state = initialState, action) {
    state = Object.assign({}, state);
    switch (action.type) {
        case types.GET_FONTS_REQUEST:
            state.isFetching = true;
            return state;
        case types.GET_CATEGORIES_REQUEST:
            state.isFetchingCategories = true;
            return state;
        case types.GET_ALL_FONTS_SUCCESS:
            state.fonts = action.fonts.items;
            state.fontFamily = action.fonts.items[0].family;
            state.category = action.fonts.items[0].category;
            state.isFetching = false;
            console.log('..stop fetching');
            return state;
        case types.GET_ALL_CATEGORIES_SUCCESS:
            state.categories = action.categories;
            state.isFetchingCategories = false;
            return state;
        case types.CHANGE_FONTFAMILY_SUCCESS: 
            state.fontFamily = action.font;
            return state;
        case types.CHANGE_FONTSIZE_SUCCESS: 
            state.fontSize = action.fontSize;
            return state;
        case types.CHANGE_CATEGORY_SUCCESS:
            state.category = action.category;
            return state;
        case types.CHANGE_FONTCOLOR_SUCCESS:
            state.color = action.rgb;
            return state;
        case types.CHANGE_BACKGROUNDCOLOR_SUCCESS:
            state.BackgroundColor = action.rgb;
            return state;
        default:
            return state;
    }
}