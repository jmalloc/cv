import { Employer, Role } from ".";
import { Bullets, Tags } from "../../components/list";

export default function () {
    return (
        <Employer
            company="Oz Servers"
            industry="Web hosting & dedicated Servers"
        >
            <Role
                title="Lead Software Developer"
                from="2002" to="2005-02"
                location="in-office"
            >
                <p>
                    Enabled the company's expansion into dedicated hosting and co-location by
                    <strong>leading the development of a comprehensive business operations platform</strong> that supported
                    all aspects of daily operations, including ordering, billing, issue tracking, DNS zone management,
                    network automation, and asset tracking.
                </p>

                <Bullets>
                    <>implemented a query caching layer to improve responsiveness on commodity hardware</>
                    <>developed strategies to ensure data integrity in MySQL v3, which lacked transactional support</>
                    <>integrated with external systems such as routers and hardware power control devices</>
                </Bullets>

                <Tags>
                    <>PHP</>
                    <>HTML + CSS</>
                    <>JavaScript</>
                    <>C++</>
                    <>MySQL</>
                    <>Linux</>
                    <>Apache</>
                    <>iptables</>
                    <>DNS</>
                    <>DHCP</>
                </Tags>

                <aside>
                    The platform remained in active use for many years, supporting business operations until the company's
                    acquisition by <em>Servers Australia</em> in 2017.
                </aside>
            </Role>
        </Employer>
    )
}
