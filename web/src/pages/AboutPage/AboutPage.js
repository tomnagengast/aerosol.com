import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
    return (
        <>
            <MetaTags title="About" description="About page" />
            <p>This is the perfect place to talk about your project.</p>
        </>
    )
}

export default AboutPage
