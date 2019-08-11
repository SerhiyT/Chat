import React from 'react';
import { Button as BaseButton } from 'antd';
import classNames from 'classnames';

import '../Button/Button.scss';


const Button = (props) => {
    return (
        <div>
            <BaseButton
                {...props}
                className={classNames('button', props.className, {
                    "button--large": props.size === "large"
                })}>
            </BaseButton>
        </div>
    );
}


export default Button;