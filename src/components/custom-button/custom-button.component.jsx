import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children,isgooglesignin, ...otherProps}) => (
    <button className={`${isgooglesignin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;