import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { getPost, deletePost } from "../../services/posts.js";
import Layout from "../../components/Layout/Layout.jsx"

const PostDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    const deleted = await deletePost(post._id)
    setIsDeleted({deleted})
  }
  if (isDeleted) {history.push("/posts");}
  
  return (
    <Layout>
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
          onClick={() => handleDelete()}
         >
          Delete
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
