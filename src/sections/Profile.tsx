import { Section, Anchor } from "../components/structure";

export default function Profile() {
    return (
        <Section heading="Profile">
            <p>
                I'm a software engineer with <strong>over 20 years experience</strong> designing and building backend systems.
            </p>

            <p>
                My experience spans <strong>startups, small businesses, and larger organisations</strong>.
                I have a proven track record of <strong>team and project leadership</strong>, taking ownership of architecture, process, and product direction.
                I seek environments where I can <strong>guide platform direction and engineering practices</strong>, preferring technical leadership over pure people management.
            </p>

            <p>
                I'm the author of <Anchor section="Dogma" />, an open-source ecosystem for building <strong>distributed event-sourced applications in Go</strong>.
                This project reflects my focus on building maintainable systems with clear architectural boundaries and a positive developer experience.
            </p>

            <p>
                I care deeply about how software is built, both for the practical benefits to the team, and for the love of the craft itself.
            </p>
        </Section>
    );
}
