import { Icon } from "./icon";

import './list.css';

export function Bullets(
    props: { children: React.ReactNode[] },
) {
    return (
        <ul className="bullets">
            {props.children.map(
                (item, index) => (<li key={index}>{item}</li>)
            )}
        </ul>
    );
}

export function Tags(
    props: { children: React.ReactNode[] },
) {
    return (
        <ul className="tags">
            {props.children.map(
                (tag, index) => (<li key={index}>{tag}</li>)
            )}
        </ul>
    );
}

export function Links(
    props: {
        children:
        | React.ReactElement<typeof Link>
        | React.ReactElement<typeof Link>[]
    },
) {
    const children = Array.isArray(props.children) ? props.children : [props.children];

    return (
        <ul className="links">
            {children.map(
                (link, index) => (<li key={index}>{link}</li>)
            )}
        </ul>
    );
}

export function Link(
    props: {
        icon: string,
        text: string,
        href: string,
        ariaLabel: string,
    },
) {
    return (
        <a
            href={props.href}
            rel="noopener noreferrer"
            aria-label={props.ariaLabel}
            download={props.icon === "download"}
        >
            <Icon type={props.icon} />
            <span>{props.text}</span>
        </a>
    )
}
