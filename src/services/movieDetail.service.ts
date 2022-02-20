import mySqlExcute from "../utils/mySqlExcute"

class movieDetailService {
    async getMovieDetail(movieID:string) {
        const statement = `
        SELECT mls.id AS id, mls.name AS name, mls.fullName, mls.alias as alias, coverUrl, mls.IMDb,
        mls.synopsis, country, language, category, runningTime, releaseTime, 
        score, JSON_OBJECT('five', FIVESTAR, 'four', FOURSTAR, 'three', THREESTAR, 'two', TWOSTAR, 'one', ONESTAR) star, evaluatorCount,
        JSON_ARRAYAGG(JSON_OBJECT('elName', els.name , 'entertainerID', entertainerID, 'position', position)) AS entertainerList
        FROM movieList mls
        LEFT JOIN entertainer_movie em ON mls.id = em.movieID
        LEFT JOIN entertainerList els ON em.entertainerID = els.id
        WHERE em.movieID = ${movieID};
        `

        const res = await mySqlExcute(statement)

        return JSON.stringify(res)
    }
}

export default new movieDetailService()