import { Header } from "../../components/structure";
import { Links, Link } from "../../components/list";

import './banner.css';
import avatar from "./avatar.jpg";

export default function () {
    const date = new Date().toLocaleDateString("en-AU", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <>
            <div className="splash" aria-hidden="true"></div>
            <img className="avatar" src={avatar} alt="Photograph of James Harris" />

            <Header
                heading="James Harris"
                subheading="Senior Software Engineer"
            />

            <nav aria-label="Contact Information & Links">
                <Links>
                    <Link
                        icon="location"
                        text="Brisbane, AU"
                        href="https://maps.app.goo.gl/hyKU1jCwBRrNoh1z9"
                        ariaLabel="View location on Google Maps"
                    />

                    {/* <Link
                        icon="phone"
                        text="(redacted)"
                        href="tel:(redacted)"
                        ariaLabel="Phone James on (redacted)"
                    // cipherText="42OjeT1oFwbC7ZnqMrw6zT0sZpJI0MY1brGCr+h4YE5Vp6R+51ZFbQ=="
                    /> */}

                    <Link
                        icon="email"
                        text="contact@jamesharris.id.au"
                        href="mailto:contact@jamesharris.id.au"
                        ariaLabel="Email James at contact@jamesharris.id.au"
                    />

                    <Link
                        icon="linkedin"
                        text="jmalloc"
                        href="https://www.linkedin.com/in/jmalloc/"
                        ariaLabel="View LinkedIn profile"
                    />

                    <Link
                        icon="github"
                        text="jmalloc"
                        href="https://github.com/jmalloc"
                        ariaLabel="View GitHub profile"
                    />

                    <Link
                        icon="download"
                        text="PDF"
                        href="downloads/james-harris-cv.pdf"
                        ariaLabel="Download PDF"
                    />
                </Links>

                <aside className="print-only">
                    This version of my CV was published on <strong>{date}</strong> &mdash; the latest version is
                    always available at <a href="https://cv.jamesharris.id.au">cv.jamesharris.id.au</a>.
                </aside>
            </nav>
        </>
    );
}
