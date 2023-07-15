import './button.scss';

const Button = ({ icon, name, type, ...props }) => {
    const types = ['standart', 'white'];
    let styleType = 'standart';

    if (types.includes(type)) {
        styleType = type;
    }

    return (
        <button class={`btn btn_${styleType}`} {...props}>
            <div class="btn__icon">
                {icon}
            </div>
            {name}
        </button>
    )
}

export default Button;