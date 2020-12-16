import React, {useEffect} from 'react'
import Axios from 'axios'

function Favorite(props) {
	const userFrom = props.userFrom
	const movieId = props.movieId
	const movieTitle = props.MovieInfo.title
	const moviePost = props.MovieInfo.backdrop_path
	const movieRunTime = props.movieInfo.runtime

	useEffect(() => {

		let variables = {
			userFrom,
			movieId
		}

		Axios.post("/api/favorite/favoriteNumber", variables)
		.then(response => {
			if(response.data.success) {

			} else {
				alert('좋아요 데이터 로딩에 실패했습니다.')
			}
		})

	}, [])

	return (
		<div>
			<button>좋아요</button>
		</div>
	)
}

export default Favorite
