import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
    return (
        <>
            <MetaTags title="About" description="About page" />

            <h1>AboutPage</h1>
            <p>
                Find me in <code>./web/src/pages/AboutPage/AboutPage.js</code>
            </p>
            <p>
                My default route is named <code>about</code>, link to me with
                <ul>
                    <li>
                        <Link to={routes.home()}>Home</Link>
                    </li>
                    <li>
                        <Link to={routes.about()}>About</Link>
                    </li>
                </ul>
            </p>
        </>
    )
}

export default AboutPage
