import { Section, Article, Cards } from "../components/structure";
import { Links, Link } from "../components/list";

function Project(
    props: {
        title: string,
        caption: string,
        summary: string,
        repo: string,
    },
) {
    return (
        <Article
            heading={props.title}
            caption={props.caption}
        >
            <p>{props.summary}</p>

            <Links>
                <Link
                    icon="github"
                    text={props.repo}
                    href={`https://github.com/${props.repo}#readme`}
                    ariaLabel={`View ${props.title} on GitHub`}
                />
            </Links>
        </Article>
    );
}

export default function OpenSource() {
    return (
        <Section heading="Open Source">
            <Cards>
                <Project
                    title="Dogma"
                    caption="Event-sourcing framework for Go"
                    summary="Dogma is a comprehensive set of tools for building distributed event-sourced applications in Go."
                    repo="dogmatiq/dogma"
                />
                <Project
                    title="Recoil"
                    caption="Asynchronous coroutines for PHP 7"
                    summary="Recoil provides a generator-based syntax for expressing asynchronous logic in a familiar imperative manner."
                    repo="recoilphp/recoil"
                />
                <Project
                    title="Grit"
                    caption="CLI for management of Git clones"
                    summary="Grit clones and indexes your Git repositories, with fast directory switching & autocomplete."
                    repo="jmalloc/grit"
                />
            </Cards>
        </Section>
    );
}
