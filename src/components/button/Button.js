import clsx from 'clsx';
import './button.scss';

const Button = ({ icon, variant, spClass, children, ...props }) => {
    const variants = ['standart', 'white', 'outline'];
    let styleType = 'standart';

    if (variants.includes(variant)) {
        styleType = variant;
    }

    return (
        <button class={clsx("btn", `btn_${styleType}`, spClass)} {...props}>
            {icon && (
                <div class="btn__icon">
                    {icon}
                </div>
            )}
            {children}
        </button>
    )
}

export default Button;