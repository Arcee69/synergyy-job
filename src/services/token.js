/* eslint-disable import/no-anonymous-default-export */
class TokenService {
    getToken() {
        return sessionStorage.getItem("token")
    }
    setToken(token) {
        return sessionStorage.setItem("token", token)
    }
    removeUser() {
        sessionStorage.removeItem("token")
    }
}
export default new TokenService();
