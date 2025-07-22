import { Section, Article, } from "../../components/structure";
import { createContext, useContext } from "react";

import BetSecure from "./betsecure";
import Codeworx from "./codeworx";
import ManagedSolutions from "./managed-solutions";
import OzServers from "./oz-servers";

const employerContext = createContext<string | null>(null);

export default function () {
    return (
        <Section heading="Employment History">
            <BetSecure />
            <Codeworx />
            <ManagedSolutions />
            <OzServers />
        </Section>
    )
}

export function Employer(
    props: {
        company: string,
        industry: string,
        children: React.ReactNode,
    },
) {
    return (
        <Section
            heading={props.company}
            caption={props.industry}
            ariaLabel={`Employer: ${props.company}`}
        >
            <employerContext.Provider value={props.company}>
                {props.children}
            </employerContext.Provider>
        </Section>
    );
}

export function Role(
    props: {
        title: string,
        from: string,
        to?: string,
        location: string,
        children: React.ReactNode,
    },
) {
    const employer = useContext(employerContext);

    if (!employer) {
        throw new Error("Role must be used within an Employer context");
    }

    const parseAndFormatDate = (date?: string): [Date, string] => {
        if (!date) {
            return [new Date(), "present"];
        }

        const hasMonth = date.length > 4;
        const parsed = new Date(date)
        const format: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: hasMonth ? 'short' : undefined
        };

        return [
            parsed,
            parsed.toLocaleDateString('en-US', format),
        ];
    };

    const [from, fromStr] = parseAndFormatDate(props.from);
    const [to, toStr] = parseAndFormatDate(props.to);

    const tenureYears = (to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    const tenure = Math.ceil(tenureYears * 2) / 2; // round up to nearest 0.5 years

    return (
        <Article
            heading={props.title}
            caption={<>{fromStr} <span aria-label="through">&mdash;</span> {toStr} &#8226; {tenure} {tenure === 1 ? "year" : "years"} &#8226; {props.location}</>}
            ariaLabel={`Role: ${props.title} at ${employer}`}
        >
            {props.children}
        </Article>
    );
}
