import React from 'react'

const ArticleList = ({ articles }) => {
  if (!articles) {
    return <div className="article-preview">Loading ...</div>
  }

  if (articles.length === 0) {
    return <div className="article-preview">아직 게시물이 없습니다. 😭</div>
  }

  return (
    <div>
      {articles.map((article) => (
        <h2>{article.title}</h2>
      ))}
    </div>
  )
}

export default ArticleList
