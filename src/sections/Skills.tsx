import { Section, Article, Cards } from "../components/structure";
import { Bullets, Tags } from "../components/list";

export default function Skills() {
    return (
        <Section heading="Skills + Experience">
            <Cards>
                <SkillCategory
                    title="Leadership & Collaboration"
                    summary="Pragmatic, people-focused engineer known for structured thinking, honest communication, and decisions that build trust and consensus."
                    skills={[
                        "inclusive decision-making",
                        "empathetic technical feedback",
                        "cross-discipline mentoring",
                        "goal-oriented conflict resolution",
                        "alignment through clear reasoning",
                        "calm incident leadership",
                        "clarity in ambiguous contexts",
                        "productivity in unfamiliar domains",
                    ]}
                />

                <SkillCategory
                    title="Systems Engineering"
                    summary="Engineering of distributed and centralized systems with an emphasis on clarity, modularity, and long-term maintainability."
                    skills={[
                        "message-based systems",
                        "event-sourcing",
                        "real-time & collaborative domains",
                        "domain-driven design (DDD) & CQRS",
                        "pragmatic microservices",
                        "unit, integration & contract testing",
                    ]}
                    tags={[
                        "Go",
                        "PHP",
                        "HTML + CSS",
                        "Node.js",
                        "gRPC",
                        "OpenAPI",
                        "WebSockets",
                        "SSE",
                        "ADRs",
                        "I18n",
                    ]}
                />

                <SkillCategory
                    title="Databases & Storage"
                    summary="Selection and integration of storage solutions to meet varying performance, durability, modelling and access requirements."
                    skills={[
                        "relational & document modelling",
                        "index & query optimisation",
                        "event retention strategies",
                        "read-model derivation",
                    ]}
                    tags={[
                        "PostgreSQL",
                        "MySQL",
                        "Redis",
                        "DynamoDB",
                        "SQLite",
                        "bbolt",
                        "S3",
                    ]}
                />

                <SkillCategory
                    title="Tooling & Automation"
                    summary="Development of pipelines supporting fast-feedback, repeatable builds, and low-friction deployments."
                    skills={[
                        "CI/CD pipelines",
                        "zero-downtime deployments",
                        "dev/prod parity strategies",
                        "custom command-line tooling",
                    ]}
                    tags={[
                        "Git",
                        "GitHub Actions + API",
                        "Slack API",
                        "Argo CD",
                        "Docker",
                        "Helm",
                        "Make",
                        "Bash",
                    ]}
                />

                <SkillCategory
                    title="Platform & Infrastructure"
                    summary="Design and operation of development and production infrastructure, valuing operability and developer experience."
                    skills={[
                        "infrastructure as code (IaC) & GitOps",
                        "internal developer portals",
                        "secrets management",
                        "custom Kubernetes controllers",
                    ]}
                    tags={[
                        "Git",
                        "Kubernetes",
                        "AWS",
                        "Karpenter",
                        "Terraform",
                        "Crossplane",
                        "KCL",
                    ]}
                />

                <SkillCategory
                    title="Observability & Operations"
                    summary="Instrumentation and operational readiness practices to improve visibility, reliability, and response across distributed systems."
                    skills={[
                        "structured logging & trace correlation",
                        "metric collection",
                        "automated health checks",
                        "incident response & post-mortems",
                    ]}
                    tags={[
                        "OpenTelemetry",
                        "AWS X-Ray",
                        "Prometheus",
                    ]}
                />
            </Cards>

            <aside>
                Additional experience includes C++, Python and C# and limited commercial experience with embedded systems
                and electronics hardware design.
            </aside>
        </Section>
    );
}


function SkillCategory(
    props: {
        title: string,
        summary: string,
        skills: string[],
        tags?: string[],
    },
) {
    return (
        <Article heading={props.title}>
            <p>{props.summary}</p>
            <Bullets>{props.skills}</Bullets>
            {props.tags && <Tags>{props.tags}</Tags>}
        </Article>
    );
}
