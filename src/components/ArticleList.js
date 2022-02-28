import ArticlePreview from './ArticlePreview';
import ListPagination from './ListPagination';
import React from 'react';

const ArticleList = React.memo(props => {
	if (!props.articles) {
		return (
			<div className="article-preview">Loading...</div>
		);
	}

	if (props.articles.length === 0) {
		return (
			<span className="article-preview">
				No articles are here... yet.
			</span>
		);
	}

	return (
		<div>
			{
				props.articles.map(article => {
					return (
						<ArticlePreview article={article} key={article.slug} />
					);
				})
			}

			<ListPagination
				pager={props.pager}
				articlesCount={props.articlesCount}
				currentPage={props.currentPage} />
		</div>
	);
});

export default ArticleList;
