import http from "../http-all";

class NewsService {
    getNews() {
        return http.get(`/feed.rss`);
    }
}

export default new NewsService();
