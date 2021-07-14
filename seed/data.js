import db from "../db/connection.js"
import Post from "../models/post.js"

const insertData = async () => {

  await db.dropDatabase()

  const posts = [
    {
      title: "Hello World",
      author: "Czar Naved",
      body: "Welcome to the home of my delusions",
      imgURL: "insert pic"
    },
    {
      title: "Nobody Asked",
      author: "Jane Don't",
      body: "I'm gonna tell you anyway",
      imgURL: "another pic"
    }
  ]
  await Post.insertMany(posts)
  console.log('Created posts!')
  db.close()
}

insertData()