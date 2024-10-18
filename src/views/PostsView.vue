<template>
  <div class="posts">
    <div class="container">
      <div v-show="isLoading" class="posts__spinner">
        <img class="posts__spinner-gif" src="../assets/images/loading.gif" alt="spinner">
      </div>
      <div class="posts__body">
        <Post v-for="(post, ind) in posts" :key="ind" :post="post" :id="ind" />
      </div>
    </div>
  </div>
</template>

<script>
import Post from '../components/Post.vue'
export default {
  name: 'PostsView',
  components: {
    Post
  },
  data() {
    return {
      posts: [],
      isLoading: false,
      error: null, 
      page: 1,
      numberPostByPage: 10,
      maxPages: null
    }
  },
  methods: {
    fetchPosts() {
      this.isLoading = true
      fetch('/feed.json')
        .then((response) => {
          return response.json()
        })
        .then((posts) => {
          setTimeout(()=>{
            this.isLoading = false;
            this.maxPages = posts.length / this.numberPostByPage;
            this.posts = posts.slice(0, this.page * this.numberPostByPage);
          },1000)
        })
        .catch((error) => {
          this.error = error
          this.isLoading= false
        })
    }
  },
  mounted() {
    this.fetchPosts();
    window.addEventListener('scroll', (e) => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        this.page += 1
        if (this.page <= this.maxPages) {
          this.fetchPosts()
        }
      }
    });
  }
}
</script>

<style lang="scss" scoped>
  .posts {
    padding-top: 24px;
    &__body {
      padding-bottom: 4px;
    }
    &__spinner {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba($color: #ffffff, $alpha: .4);
    }
    &__spinner-gif {
      width: 120px;
    }
  }
</style>
