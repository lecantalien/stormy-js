import http from "../http-css";

class ThemesService {
    getTheme(themeID) {
        if (themeID === undefined) {
            themeID = "default";
        }
        themeID = themeID.toLowerCase();
        return http.get(`/themes/${themeID}.css`);
    }
}

export default new ThemesService();