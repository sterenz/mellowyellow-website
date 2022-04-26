import * as React from 'react';

const Paragraph = (props) => {
    const fontSize = props.fontSize;
    const color = props.color;

    return (
        <p style={{
            fontSize: `${fontSize}`,
            color: `${color}`
        }}>
            {props.children}
        </p>
    )
};


export default Paragraph;