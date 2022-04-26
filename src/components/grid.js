import * as React from 'react';

const Grid = (props) => {
    return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-4 xl:grid-cols-12 gap-6'>
        {props.children}
    </div>
    </>
)
};

export default Grid;