import React from 'react';
import './Classification.css'
import Loader from '../loader';


const FontOptions = ({ activeClassification, categories, handleCategoryChange, isFetching }) => {
    const style = {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        padding: '0px'
    }

    const listStyle = {
        border: '3px solid #ffdf01',
        borderRadius: '3px',
        padding: '4px 5px',
        display: 'flex',
        justifyContent: 'center',
        width: '100px',
        marginBottom: '10px',
        cursor: 'pointer',
        textTransform: 'capitalize',
        margin: '5px',

    }

    const listItems = (categories) => {
        return (categories.map((item, index) => {
            return (
                <li
                    id={item}
                    style={listStyle}
                    key={index}
                    value={item}
                    className={activeClassification === item ? 'active' : ''}
                    onClick={handleCategoryChange}
                >
                    {item}
                </li>);
        }));
    }

    return (
        <div>
            <h4>
                Classification
            </h4>
            <ul style={style}>
    {isFetching ? <Loader /> : listItems(categories)  }
            </ul>
        </div>
    );
}

export default FontOptions;
