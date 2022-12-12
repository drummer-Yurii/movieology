import axios from "axios"
import { stringify } from "qs"
import { IMDB_SEARCH_URL } from "./movies.const"

export const searchInIMDB = async query => {
    const queryParams = stringify({
        language: 'ru',
        api_key: 'ca7b0635ffccf1dfb0cd5e2673609810',
        query
    })
    const {data: {results}} = await axios.get(`${IMDB_SEARCH_URL}/search/movie?${queryParams}`)
    const [movie] = results
    return movie
}

export const getMovieFromIMDB = async (IMDBId: string) => {
    const queryParams = stringify({
        language: 'ru',
        api_key: 'ca7b0635ffccf1dfb0cd5e2673609810'
    })
    const result = await axios.get(`${IMDB_SEARCH_URL}/movie/${IMDBId}?${queryParams}`)

    return result.data
}