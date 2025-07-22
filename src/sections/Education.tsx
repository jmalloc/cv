import { Section, Article } from "../components/structure";

export default function () {
    return (
        <Section heading="Education">
            <Credential
                title="Diploma of Information Technology"
                specialization="Software Development"
                institution="QANTM college (SAE)"
                location="Brisbane"
                from="2001" to="2001"
            />

            <Credential
                title="Certificate III in Electronics"
                institution="South Bank TAFE"
                location="Brisbane"
                from="1998" to="1999"
            />
        </Section>
    );
}

function Credential(
    props: {
        title: string,
        specialization?: string,
        institution: string,
        location: string,
        from: string,
        to: string,
    },
) {
    return (
        <Article
            heading={props.title}
            subheading={props.specialization}
            caption={
                <>
                    {props.institution}, {props.location}
                    &#8226;
                    {props.from} {props.from != props.to && <><span aria-label="through">&mdash;</span> {props.to}</>}
                </>
            }
        />
    );
}
