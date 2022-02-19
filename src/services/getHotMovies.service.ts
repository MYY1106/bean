import mySqlExcute from "../utils/mySqlExcute"
class UserService {
    async getHotMovies(type:string) {
        const statement = `SELECT JSON_ARRAYAGG(JSON_OBJECT('movieID', movieList.id, 'movieName', movieList.name, 'score', score, 'coverURL' ,coverUrl)) AS json FROM movieList
        JOIN recentMovieList ON recentMovieList.movieID = movieList.id AND type = ?;`
        
        const data = await mySqlExcute(statement, [type])
        
        return data
    }
}

export default new UserService()