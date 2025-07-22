import { Section, Cards, Article } from "../components/structure";
import { Links, Link } from "../components/list";



export default function () {
    return (
        <Section heading="References">
            <Cards>
                <Reference
                    name="Dan Henke"
                    company="BetSecure"
                    role="General Manager"
                    email="contact@danhenke.au"
                    phone="AlAg2v2O+srWBWIgRWEz73q/KOtL6iGRslDRvPaTrOtGNtlPv18wGQ=="
                />
                <Reference
                    name="Erin Millard"
                    company="BetSecure"
                    role="Principal Software Engineer"
                    email="contact@erin.id.au"
                    phone="csfJQeKFiS9P4Wyc1KdzLlmpd1H7RdV91G3HkZX296QjganHSxmuow=="
                />
                <Reference
                    name="Danil Petrov"
                    company={["Codeworx", "BetSecure"]}
                    role="Senior Software Engineer"
                    email="danilpetrovvi@gmail.com"
                    phone="lJjPgL44NnogwJ5iMyPVhshRYibMTKOCZtZQi3ZJ4Kmy35nuyZiFCg=="
                />
            </Cards>

            <aside className="redacted-version-only">Telephone contact details are available on request.</aside>
        </Section>
    );
}


function Reference(
    props: {
        name: string,
        company: string | string[],
        role: string
        email: string,
        phone: string,
    },
) {
    const company = Array.isArray(props.company)
        ? props.company.join(" & ")
        : props.company;

    return (
        <Article
            heading={props.name}
            subheading={company}
            caption={props.role}
        >
            <Links>
                <Link
                    icon="email"
                    text={props.email}
                    href={`mailto:${props.email}`}
                    ariaLabel={`Email ${props.name} at ${props.email}`}
                />
                {/* <Link
                    icon="phone"
                    text={props.phone}
                    href={`tel:(redacted)`}
                    ariaLabel={`Phone ${props.name} on (redacted)`}
                /> */}
            </Links>
        </Article>
    );
}
