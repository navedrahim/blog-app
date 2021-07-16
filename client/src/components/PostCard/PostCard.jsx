
function PostCard(props) {
  return (
    <div className="post-card">
      <h3 className="post-card-title">{props.post.title}</h3>
      <h3 className="post-card-author">{props.post.author}</h3>
      <img className="post-card-image" src={props.post.imgURL} alt={props.post.title}/> 
    </div>
  )
}

export default PostCard