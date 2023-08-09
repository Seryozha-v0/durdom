import './formTextField.scss';

const FormTextField = ({ name, label, error, ...props }) => {
    return (
        <div class="textField">
            <label htmlFor={name} class="textField__label">{label}</label>
            <input name={name} class="textField__input" {...props} />
            {error && (
                <div class="textField__error">{error}</div>
            )}
        </div>
    )
}

export default FormTextField;