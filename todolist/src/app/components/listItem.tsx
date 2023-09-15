'use client'

import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import type { initialStateProps, postsProps } from '@/redux/feature/posts/posts.types'

const PostList = () => {
    const postData = useSelector((state: RootState) => state.posts.data);
    console.log(postData)

    if (!postData.length) {
        return (
            <section>
                <h1>Empty</h1>
            </section>
        )
    }


    const renderedPosts = postData.map((post: postsProps) => (
        <label key={post.id}>
            <span>#{post.id}</span>
            <h3>{post.title}</h3>
        </label>
    ));


    return (
        <section>
            <div >
                <h1>To do</h1>
                {renderedPosts}
            </div>
        </section>
    )
}

export default PostList