'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import type { postsProps } from '@/redux/feature/posts/posts.types'
import { FilterData } from '@/../libs/filter'

const PostList = () => {
    const postsData = useSelector((state: RootState) => state.posts.data);

    const { done, todo, working } = FilterData(postsData)

    console.log({ done, todo, working })
    if (!postsData.length) {
        return (
            <section>
                <h1>Empty</h1>
            </section>
        )
    }


    const renderedTodoPosts = todo.map((post: postsProps, index) => (
        <label key={index + 1}>
            <span>#{index + 1}</span>
            <h3>{post.title}</h3>
        </label>
    ));
    const renderedWorkingPosts = working.map((post: postsProps, index) => (
        <label key={index + 1}>
            <span>#{index + 1}</span>
            <h3>{post.title}</h3>
        </label>
    ));
    const renderedDonePosts = done.map((post: postsProps, index) => (
        <label key={index + 1}>
            <span>#{index + 1}</span>
            <h3>{post.title}</h3>
        </label>
    ));


    return (
        <section>
            <div >
                <h2>To do</h2>
                {renderedTodoPosts}
            </div>
            <div>
                <h2>Working</h2>
                {renderedWorkingPosts}
            </div>
            <div>
                <h2>Done</h2>
                {renderedDonePosts}
            </div>
        </section>
    )
}

export default PostList