import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
    return (
        <>
            <MetaTags title="Home" description="Home page" />
            <p>Well, well, well. This is the home page.</p>
        </>
    )
}

export default HomePage
