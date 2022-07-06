import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div className=''>
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='flex flex-col py-2 border-2 border-transparent border-b-gray-600'
        >
          <Link href={`/blog/${slug}`}>
            <div className='flex'>
              <span>
               {new Date(frontmatter.date).toDateString().slice(3)}
              </span>
              <a>
                <h1 className='px-4 text-gray-200 hover:text-white cursor-pointer font-bold'>{frontmatter.title}</h1>
              </a>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}