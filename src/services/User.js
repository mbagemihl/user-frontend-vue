import axios from "axios"

export default {
    async fetchAll () {
        const { data } = await axios.get('/users')
        return data
    },
    create (user) {
        return axios.post('/users', {
            name: user.name || 'unknown',
            gender: user.gender === undefined ? 'NONE' : user.gender.toUpperCase(),
            avatar: user.avatar === undefined ? 'MARIO' : user.avatar.replace('nes-', '').toUpperCase(),
            adult: user.adult
        })
    },
    async delete (userId) {
        const { data } = axios.delete(`/users/${userId}`)
        return data
    }
}
