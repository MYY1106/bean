import crypto from 'crypto'
const md5password = (password: string) => {
    const md5 = crypto.createHash('md5')
    return md5.update(password).digest('hex')
}
export default md5password