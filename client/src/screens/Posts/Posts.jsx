import { getPosts } from "../../services/posts.js"
import PostCard from "../../components/PostCard/PostCard.jsx"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Layout from "../../components/Layout/Layout.jsx"

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
    <Layout>
      <div className="post-card-container">
        {posts.map((post) => (
          <Link to={`/posts/${post._id}`}>
            <PostCard key={post._id} post={post} />
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default Posts