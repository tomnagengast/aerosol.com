import { Set, Router, Route } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout'

const Routes = () => {
    return (
        <Router>
            <Route path="/" page={HomePage} name="home" />
            <Route path="/about" page={AboutPage} name="about" />
            <Set wrap={PostsLayout}>
                <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
                <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
                <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
                <Route path="/posts" page={PostPostsPage} name="posts" />
            </Set>
            <Route notfound page={NotFoundPage} />
        </Router>
    )
}

export default Routes
