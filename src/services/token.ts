import * as Cookies from 'js-cookie';

const TOKEN_KEY = 'access_token';
const USER_KEY = "user";
const LANG_KEY = 'lang';

export class TokenService {
    static getToken() {
        return Cookies.get(TOKEN_KEY);
    }
    static setToken(accessToken: string) {
        return Cookies.set(TOKEN_KEY, accessToken, { expires: 60 });
    }
    static removeToken() {
        Cookies.remove(TOKEN_KEY);
    }
    static setUser(user: any) {
        Cookies.set(USER_KEY, JSON.stringify(user))
    }
    static getUser() {
        if (Cookies.get(USER_KEY)) return JSON.parse(Cookies.get(USER_KEY))
        return {}
    }
    static getLang() {
        return Cookies.get(LANG_KEY)
    }
    static getHeader() {
        return {
            Authorization: `Bearer ${this.getToken()}`,
            'Accept-Language': this.getLang() || 'ja',
        }
    }
}