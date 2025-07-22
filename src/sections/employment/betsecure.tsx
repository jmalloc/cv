import { Anchor } from "../../components/structure";
import { Bullets, Tags } from "../../components/list";
import { Employer, Role } from ".";

export default function () {
    return (
        <Employer
            company="BetSecure"
            industry="iGaming Geolocation, Compliance & Fraud Prevention"
        >
            <Role
                title="Principal Software Engineer"
                from="2021-11"
                location="Fully Remote"
            >
                <p>
                    Shared <strong>responsibility for technical and product leadership</strong> across a startup
                    delivering "Compliance as a Service" to online gambling operators. The platform enforced
                    state-specific geolocation and regulatory controls as required by United States legislation.
                    BetSecure shares a parent company with <Anchor section="Codeworx" />, my previous employer.
                </p>

                <p>
                    <strong>Recruited engineers to form cross-functional teams</strong> with frontend, backend,
                    mobile, and DevOps skillsets. Established remote mob programming as a core practice. Eliminated
                    pull requests and asynchronous reviews in favour of continuous collaboration, reducing overhead
                    and context switching.
                </p>

                <p>
                    <strong>Directed the architecture and implementation of backend systems</strong>, including
                    geolocation services, API gateways, and compliance logic. Services were built in Go using an
                    <strong>event-sourced architecture, following CQRS and domain-driven design principles</strong>.
                </p>

                <Bullets>
                    <>mentored engineers in distributed design, event-sourcing, read-model projection, and CQRS</>
                    <>guided architecture across multiple autonomous teams</>
                    <>interpreted regulatory documents to ensure systems adhere to state-specific compliance rules</>
                    <>built a Kubernetes-based developer platform with on-demand environments provisioned via Slack</>
                    <>developed tools for in-cluster development using real domains, certificates and cloud services</>
                    <>implemented SSO support for multiple IdPs, covering internal platforms, developer tooling, and customer-facing products</>
                    <>led ongoing development of <a href="#dogma">Dogma</a> in collaboration with <a href="#codeworx">Codeworx</a> engineers.</>
                </Bullets>

                <Tags>
                    <>Go</>
                    <>DDD</>
                    <>CQRS</>
                    <>Node.js</>
                    <>yarn</>
                    <>gRPC</>
                    <>OpenAPI</>
                    <>PostgreSQL</>
                    <>PostGIS</>
                    <>GeoJSON</>
                    <>DynamoDB</>
                    <>Kubernetes</>
                    <>Helm</>
                    <>Argo CD</>
                    <>Telepresence</>
                    <>AWS</>
                    <>Terraform</>
                    <>Git</>
                    <>OAuth + OIDC</>
                    <>JOSE/JWT</>
                    <>Okta</>
                </Tags>
            </Role>
        </Employer>
    );
}
