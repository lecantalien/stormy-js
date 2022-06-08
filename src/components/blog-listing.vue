<template>
  <div class="blog-listing">
    <div v-if="allArticles !== undefined"
         class="blog-listing-inner-wrapper row">
      <div v-for="article in allArticles"
           :key="article.guid"
           class="col-12 col-md-6 article pb-5">
        <div class="news-title h3">
          {{ article.title }}
        </div>
        <div class="new-content">
          {{ article.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsService from "@/services/NewsService";

export default {
  name: "blog-listing",
  props: {},
  data() {
    return {
      d: null,
      newsArray: undefined,
      newsService: NewsService,
    }
  },
  watch: {},
  computed: {
    allArticles() {
      return this.$store.getters.getNewsFeed;
    }
  },
  created() {

  },
  mounted() {
    if (this.allArticles === undefined) {
      // todo fetch articles
      this.fetchArticles();
    }
    // nothing to do
  },
  methods: {
    fetchArticles() {
      this.newsService.getNews()
          .then(response => {
            console.log('response', response);
            let articles_ = response?.data?.items;
            if (articles_ === undefined || articles_ === null || articles_.length <= 0) {
              throw new Error('No articles to display')
            }
            this.newsArray = articles_;
            this.$store.commit('update_newsFeed', articles_);
          })
          .catch(err => {
            console.error('error', err);
          })
    },
  },
  components: {},
  beforeUnmount() {
  }
}
</script>

<style scoped>

</style>