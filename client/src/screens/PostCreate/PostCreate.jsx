import { useState } from "react";
import { Redirect } from "react-router-dom";
import { createPost } from "../../services/posts";

const PostCreate = () => {
  const [post, setPost] = useState({
    title: "",
    author: "",
    imgURL: "",
    body: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { title, value } = event.target;
    setPost({
      ...post,
      [title]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createPost(post);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/posts`} />;
  }

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        className="input-title"
        placeholder="Title"
        value={post.title}
        required
        onChange={handleChange}
      />
      <input
        className="input-author"
        placeholder="Author"
        value={post.author}
        required
        onChange={handleChange}
      />
      <textarea
        className="textarea-body"
        rows={10}
        placeholder="Body"
        value={post.body}
        required
        onChange={handleChange}
      />
      <input
        className="input-image"
        placeholder="Image Link"
        value={post.imgURL}
        required
        onChange={handleChange}
      />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default PostCreate;
