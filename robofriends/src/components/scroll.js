import React from 'react';

const Scroll = (props) => {
    // console.log(props)
    // We use jsx instead of css
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll
