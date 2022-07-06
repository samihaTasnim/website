import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import md from 'markdown-it';

export default function PostPage({ frontmatter, content }) {
  return (
    <div className=''>
      <h1 className='text-2xl'>{frontmatter.title}</h1>
      <br />
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}