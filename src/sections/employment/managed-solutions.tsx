import { Bullets, Tags } from "../../components/list";
import { Employer, Role } from ".";

export default function () {
    return (
        <Employer
            company="Managed Solutions"
            industry="IT services & internet service provider"
        >
            <Role
                title="Software Developer"
                from="2005-02"
                to="2006-07"
                location="in-office"
            >
                <p>
                    Streamlined daily operations for field technicians by <strong>developing an on-site job management system</strong>
                    incorporating scheduling, time tracking, and invoicing features across desktop and early smartphone devices.
                </p>

                <p>
                    <strong>Worked largely independently</strong> with technical guidance from a skilled Python
                    developer. Collaborated with the general manager, acting as product owner, to keep features aligned
                    with established business processes.
                </p>

                <Bullets>
                    <>quickly learned Python and its web-development ecosystem</>
                    <>applied prior MySQL experience to PostgreSQL schema &amp; query design</>
                    <>developed branded mini-sites for conference attendee &amp; speaker registration</>
                </Bullets>

                <Tags>
                    <>Python</>
                    <>PHP</>
                    <>HTML + CSS</>
                    <>JavaScript</>
                    <>PostgreSQL</>
                    <>Linux</>
                    <>Apache</>
                    <>SVN</>
                </Tags>
            </Role>
        </Employer>
    )
}
