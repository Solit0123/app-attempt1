function Blog({ posts }) {
    return (
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    )
  };

export async function getStaticProps(){

const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const posts = await response.json();

return {
    props: {
        posts,
    },
}
}

export default Blog