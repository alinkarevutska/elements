import className from 'classnames';

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline, 
    rounded,
    ...rest
}) => {
    const classes = className(rest.className, 'flex items-center px-3 py-1.5 border m-1', { //default classes
        'border-blue-500 bg-blue-500 text-white': primary, //additional classes (truthy or falthy)
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-zinc-50 outline-inherit text-black': outline,
    });

    return (
        <button {...rest} className={classes}>{children}</button>
    );
};

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary) 
        + Number(!!secondary) 
        + Number(!!success) 
        + Number(!!warning) 
        + Number(!!danger);

        if(count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be true');
        }
    }
}

export default Button;