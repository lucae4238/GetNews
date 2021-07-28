export const NEWS_LOADING = 'NEWS_LOADING';
export const NEWS_FAILED = 'NEWS_FAILED';
export const NEWS_SUCCESS = 'NEWS_SUCCESS';

export interface articleI {
    source: {
        name: string
    }
    publishedAt: string
    urlToImage: string
    url: string
    title: string
    author: string
    content: string
}

export interface newsLoading {
    type: typeof NEWS_LOADING
}

export interface newsFailed {
    type: typeof NEWS_FAILED
}


export interface newsSuccess {
    type: typeof NEWS_SUCCESS,
    payload: articleI[]

}

export type newsDispatchTypes = newsLoading | newsFailed | newsSuccess