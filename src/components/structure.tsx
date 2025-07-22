import React from "react";
import { Icon } from "./icon";

import "./structure.css";

export const HeadingLevel = React.createContext(1);

export function Header(
    props: {
        id?: string,
        heading: string,
        subheading?: string,
        caption?: React.ReactNode,
    },
) {
    const level = Math.min(React.useContext(HeadingLevel), 6);
    const Hn = `h${level}` as keyof React.JSX.IntrinsicElements;

    return (
        <header>
            <Hn>
                {
                    props.id ? (
                        <a href={"#" + props.id} className="permalink" aria-label={`Permalink to ${props.heading} section`}>
                            <span aria-hidden="true">{props.heading}</span> <Icon type="link" />
                        </a>
                    ) : (
                        <span aria-hidden="true">{props.heading}</span>
                    )
                }

                {props.subheading && <div className="subheading">{props.subheading}</div>}
            </Hn>

            {props.caption && <div className="caption">{props.caption}</div>}
        </header>
    )
}


export function Section(
    props: {
        heading: string,
        subheading?: string,
        caption?: React.ReactNode,
        ariaLabel?: string,
        children: React.ReactNode,
    },
) {
    const id = slugify(props.heading);

    return (
        <section id={id} aria-label={props.ariaLabel || props.heading}>
            <Header
                id={id}
                heading={props.heading}
                subheading={props.subheading}
                caption={props.caption}
            />

            <HeadingLevel.Provider value={React.useContext(HeadingLevel) + 1}>
                {props.children && <div className="content">{props.children}</div>}
            </HeadingLevel.Provider>
        </section>
    )
}

export function Article(
    props: {
        heading: string,
        subheading?: string,
        caption?: React.ReactNode,
        ariaLabel?: string,
        children?: React.ReactNode,
    },
) {
    const id = slugify(props.heading);

    return (
        <article id={id} aria-label={props.ariaLabel || props.heading}>
            <Header
                heading={props.heading}
                subheading={props.subheading}
                caption={props.caption}
            />
            {props.children && <div className="content">{props.children}</div>}
        </article>
    )
}

export function Cards(
    props: {
        children: React.ReactNode
    },
) {
    return (
        <div className="cards">
            {props.children}
        </div>
    );
}

export function Anchor(
    props: { section: string }
) {
    const id = slugify(props.section);
    return (<a href={"#" + id}>{props.section}</a>)
}

function slugify(text: string): string {
    return text.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
}
