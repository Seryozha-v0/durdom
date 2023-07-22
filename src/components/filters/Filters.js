import clsx from "clsx";

import './filters.scss';

const Filters = ({ fields, func, inSection }) => {
    return (
        <div class="filters">
            {fields.map((item, i) => (
                <div
                    key={i}
                    class={clsx(
                        "filters__field",
                        {"filters__field_bold": inSection},
                        {"filters__field_active": i === 0 },
                    )}
                    onClick={func}
                    data-value={item.value}
                >
                    {item.name}
                </div>
            ))}
        </div>
    )
}

export default Filters;