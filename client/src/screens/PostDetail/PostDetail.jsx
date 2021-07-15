import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPost } from "../../services/posts.js";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  return (
    <div className="post-detail">
      <h2 className="title">{post.title}</h2>
      <h4 className="author">{post.author}</h4>
      <h4 className="body">{post.body}</h4>
      <img
        className="post-detail-image"
        src={`${post.imgURL}`}
        alt={post.title}
      />
      <div className="button-container">
        <button className="edit-button">
          <Link className="edit-link" to={`/posts/${post._id}/edit`}>
            Edit
          </Link>
        </button>
        <button
          className="delete-button"
          // onClick={() => deletePost(product._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
