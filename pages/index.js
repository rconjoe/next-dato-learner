import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getAllPosts } from '../lib/posts';

export default function Home() {
  const posts = getAllPosts();
  return (
    <div className={styles.container}>
      <Head>
        <title>next dato blog</title>
      </Head>
      <div>
        <h1>next dato blog</h1>
      </div>
      <div>
        {posts.map((p) => (
          <BlogPostPreview key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}

const BlogPostPreview = (props) => {
  const { data } = props;
  return (
    <div style={{ maxWidth: "400px", marginBottom: "50px" }}>
      <img src={data.coverImage} alt={data.title} />
      <h2>
        <Link href={`/blog/${data.slug}`}>
          <a>{data.title}</a>
        </Link>
      </h2>
      <div>{data.publishDate}</div>
      <p>
        {data.excerpt}
      </p>
      <div style={{ fontWeight: "bold" }}>{data.author}</div>
    </div>
  )
}
