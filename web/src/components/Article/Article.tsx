import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article key={article.id}>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <p>{article.body}</p>
      <p>{getDate(article.createdAt)}</p>
    </article>
  )
}

const getDate = (date: string) => {
  return new Date(date).toDateString()
}

export default Article
