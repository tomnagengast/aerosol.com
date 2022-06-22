import Post from 'src/components/Post/Post'

export const QUERY = gql`
    query FindPostById($id: Int!) {
        post: post(id: $id) {
            id
            title
            body
            created_at
            updated_at
            archived_at
        }
    }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Post not found</div>

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ post }) => {
    return <Post post={post} />
}
