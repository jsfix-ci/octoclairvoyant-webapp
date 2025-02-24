import type { RequestHandler } from 'msw'
import { rest } from 'msw'

import {
	renovateResults,
	testingLibraryResults,
} from '~/fixtures/github/search'
import type { RepoSearchResultItem } from '~/models'

const githubReposSearchHandlers: Array<RequestHandler> = [
	rest.get(
		'https://api.github.com/search/repositories',
		(req, res, context) => {
			const searchQuery = req.url.searchParams.get('q') ?? ''
			const cleanSearchQuery = searchQuery.replace(/[-_]/g, ' ')
			const items: Array<RepoSearchResultItem> = []

			if (cleanSearchQuery.includes('test')) {
				items.push(...testingLibraryResults)
			}

			if (cleanSearchQuery.includes('reno')) {
				items.push(...renovateResults)
			}

			return res(
				context.json({
					total_count: items.length,
					incomplete_results: false,
					items,
				})
			)
		}
	),
]

export { githubReposSearchHandlers }
