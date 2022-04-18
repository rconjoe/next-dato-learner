const posts = [
  {
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    publishDate: "2022-04-18",
    author: "rcon joe",
    coverImage: "http://placekitten.com/400/400",
    excerpt: "this is a blog post about kittens",
    content: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    slug: "kitten-post-1"
  },
  {
    id: 2,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    publishDate: "2022-04-18",
    author: "rcon joe",
    coverImage: "http://placekitten.com/400/400",
    excerpt: "this is a blog post about kittens",
    content: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    slug: "kitten-post-2"
  },
  {
    id: 3,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    publishDate: "2022-04-18",
    author: "rcon joe",
    coverImage: "http://placekitten.com/400/400",
    excerpt: "this is a blog post about kittens",
    content: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    slug: "kitten-post-3"
  },
]

export function getAllPosts() {
  return posts;
}

export function getAllSlugs() {
  let slugs = [];
  getAllPosts().map(p => slugs.push(`/blog/${p.slug}`))
  return slugs
}

export function getPostData(slug) {
  let post = null;
  getAllPosts().map((p) => {
    if (p.slug === slug) {
      post = p;
      return;
    }
  })
  return post;
}
