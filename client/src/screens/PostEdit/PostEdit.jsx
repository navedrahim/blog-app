import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
// import Layout from '../../components/Layout/Layout';
import { getPost, updatePost } from "../../services/posts.js";

function PostEdit() {
  const [post, setPost] = useState({
    title: "",
    author: "",
    body: "",
    imgURL: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updatePost(id, post);
    setUpdated(updated);
  };

  if (isUpdated) {
    history.push(`/posts/${id}`);
  }

  return (
    // <Layout>
    <div className="post-edit">
      <div className="image-container">
        <img className="edit-post-image" src={post.imgURL} alt={post.title} />
        <form onSubmit={handleSubmit}>
          <input
            className="edit-input-image-link"
            placeholder="Image Link"
            value={post.imgURL}
            name="imgURL"
            required
            onChange={handleChange}
          />
        </form>
      </div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <input
          className="input-name"
          placeholder="Title"
          value={post.title}
          name="Title"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-author"
          placeholder="Author"
          value={post.author}
          name="author"
          required
          onChange={handleChange}
        />
        <textarea
          className="textarea-body"
          rows={10}
          cols={78}
          placeholder="Body"
          value={post.body}
          name="body"
          required
          onChange={handleChange}
        />
        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
    // </Layout>
  );
}

export default PostEdit;
