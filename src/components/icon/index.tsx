import icons from "./icon.svg";
import './icon.css';

export function Icon(
    props: { type: string },
) {
    return (
        <svg className={`icon icon-${props.type}`} aria-hidden="true">
            <use href={icons + "#" + props.type} />
        </svg>
    );
}
