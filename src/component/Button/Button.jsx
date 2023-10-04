import React from 'react';

const Button = (props) => {
    const {children} = props;
    return (
        <>
            <button class="btn btn-accent">{children}</button>
        </>
    );
};

export default Button;