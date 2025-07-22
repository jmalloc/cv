import { Employer, Role } from ".";
import { Bullets, Tags } from "../../components/list";

export default function () {
    return (
        <Employer
            company="Codeworx"
            industry="Online poker & sports betting"
        >
            <Role
                title="Software Development Manager"
                from="2008-12" to="2021-11"
                location="in-office / hybrid-remote"
            >
                <p>
                    Held <strong>long-term responsibility for the architecture, quality, and continuity</strong> of
                    backend systems supporting the company's online poker and sports betting platforms.
                    <strong>Led the team through a major strategic shift</strong> from a large PHP monolith to a
                    <strong>distributed architecture in Go</strong>, built on CQRS and event-sourcing principles.
                </p>

                <p>
                    <strong>Recruited and mentored engineers</strong>, established engineering practices, and provided
                    <strong>hands-on technical leadership</strong> as the company shifted from product ownership to
                    delivering software for affiliated businesses.
                </p>

                <Bullets>
                    <>introduced unit testing, automated builds, and code coverage reporting to PHP codebases</>
                    <>advocated for company-wide move from Subversion to Git, improving branching performance and developer experience</>
                    <>led early adoption of Composer to modularise shared code</>
                    <>authored <a href="#recoil">Recoil</a>, an asynchronous coroutine library for PHP 7</>
                    <>championed adoption of Go to overcome limitations in PHP's concurrency and process model</>
                    <>developed <a href="#dogma">Dogma</a>, an opinionated event-sourcing framework for Go</>
                </Bullets>

                <Tags>
                    <>Go</>
                    <>PHP</>
                    <>HTML + CSS</>
                    <>JavaScript</>
                    <>Node.js</>
                    <>npm</>
                    <>Composer</>
                    <>PHPUnit</>
                    <>MySQL</>
                    <>PostgreSQL</>
                    <>CouchDB</>
                    <>gRPC</>
                    <>REST</>
                    <>WebSockets</>
                    <>Docker</>
                    <>Git</>
                    <>Bamboo</>
                    <>Jenkins</>
                    <>Linux</>
                    <>Apache</>
                    <>NGINX</>
                </Tags>
            </Role>

            <Role
                title="Software Developer"
                from="2006-07" to="2008-12"
                location="in-office"
            >
                <p>
                    Member of a team of PHP developers responsible for the backoffice and player-facing features of the
                    company's online poker and casino gaming platform, which powered <em>Poker.com</em> during the height of
                    poker's global popularity.
                </p>

                <p>
                    <strong>Fostered cross-team collaboration</strong> with the engineers responsible for the poker gameplay
                    components, enabling deeper integration with backoffice systems. This empowered operations staff to
                    configure complex gameplay and promotional aspects without developer involvement,
                    <strong>significantly reducing toil and increasing operational flexibility</strong>.
                </p>

                <Bullets>
                    <>designed and optimized schemas and queries across a multi-terabyte MySQL replication set</>
                    <>built highly-tuned materialized views using triggers and stored procedures</>
                    <>addressed UX challenges posed by the eventually consistent nature of replicated systems</>
                </Bullets>

                <Tags>
                    <>PHP</>
                    <>HTML + CSS</>
                    <>JavaScript</>
                    <>MySQL</>
                    <>REST</>
                    <>SOAP</>
                    <>Linux</>
                    <>FreeBSD</>
                    <>Apache</>
                    <>SVN</>
                </Tags>
            </Role>
        </Employer>
    );
}
