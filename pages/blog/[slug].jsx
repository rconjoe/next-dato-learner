import { getAllSlugs, getPostData } from '../../lib/posts'
import Link from 'next/link'
import * as styles from '../../styles/BlogPost.module.css'

export default function BlogPost(props) {
  const { postData } = props;

  return (<div className={styles.container}>
    <h1 style={{ marginTop: "20px" }}>{postData.title}</h1>
    <img src={postData.coverImage} alt={postData.title} />
    <p>
      {postData.author} / {postData.publishDate}
    </p>
    <p>
      {postData.content}
    </p>
    <div style={{ marginTop: "50px" }}>
      <Link href="/">
        <a href="/" style={{ color: "blue" }}>Back to the homepage</a>
      </Link>
    </div>
  </div>
  )
}

export const getStaticPaths = () => {
  const paths = getAllSlugs()
  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = ({ params }) => {
  const postData = getPostData(params.slug)
  return {
    props: {
      postData,
    }
  }
};
