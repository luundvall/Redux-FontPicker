import React from 'react';

const Choices = ({ fontSize, fontFamily, category }) => {
    const style = {
        display: 'flex',
        listStyle: 'none',
        padding: '0px'

    }

    const listStyle = {
        fontSize : '15px',
        textTransform: 'capitalize'

    }

    const listItems = () => {
        const items = [fontFamily, fontSize, category];
        return (items.map((item, index) => {
            return (
            <li style={listStyle} key={index} >
                {item} {index < 2 ? '|' : ''} &nbsp; 
            </li>);
        }));
    }

    return (
        <ul style={style}>
            {listItems()}
        </ul>
    );
}

export default Choices;
