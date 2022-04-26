import * as React from 'react';

const Grid = (props) => {
    return (

        <>
            {/* 
                In quetso caso i React fragments sono superflui, puoi toglierli.
                Puoi togliere anche il return e mettere le parentesi tonde al componente.
            */}
            <div className='grid grid-cols-1 md:grid-cols-4 xl:grid-cols-12 gap-6'>
                {props.children}
            </div>
        </>
    );
};

export default Grid;