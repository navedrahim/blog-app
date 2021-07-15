import { getPosts } from "../../services/posts.js"
import { useState, useEffect } from "react"
function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts)
    };
    fetchPosts();
  }, [])
  return (
    <div className="post-container">
    {posts.map((post) => (
        <div className="post">
          <h3>{post.title}</h3>
          <h3>{post.author}</h3>
          <p>{post.body}</p>
          <img src={post.imgURL}/> 
        </div>
    ))}
    </div>
  )
}

export default Posts