<template>
  <div class="post">
    <div class="post__header">
      <span class="post__date">{{post.date}}</span>
      <span class="post__name">/ {{post.authorName}} /</span>
      <a :href="post.url" class="post__url">{{post.authorUrl}}</a>
    </div>
    <div class="post__content" :id="id"></div>
  </div>
</template>

<script>
  export default {
    props: ['post', 'id'],
    name: "Post",
    data(){
      return {
        content: [...this.post.content],
        contentPostTones: this.post.contentPostTones
      }
    },
    methods: {
      colorCentent() {
        const postContent = document.getElementById(this.id);
        this.contentPostTones.forEach(el => {
          const position = el.position;
          const length = el.length
          let tone = el.tone
          let bgColor = null;
          if (tone == -1) {
            bgColor = 'red'
          } else if(tone == 1) {
            bgColor = 'green'
          } else {
            bgColor = 'yellow'
          }

          for (let i = position; i <= position + length; i++) {
            this.content[i] = `<span style="background-color: ${bgColor};">${this.content[i]}</span>`
          }
        });
        postContent.innerHTML = this.content.join('')
      }
    },
    mounted() {
      this.colorCentent()
    }
  }
</script>

<style lang="scss" scoped>
  .post {
      color: #212529bf;
      line-height: 1.25;
      padding-bottom: 20px;
      margin-bottom: 24px;
      padding: 16px;
      font-weight: 500; 
      border-radius: 2px;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12), 0 1px 5px 0 rgba(0, 0, 0, .2);
    &__header {
      margin-bottom: 14px;
    }
    &__name {
      color: #000000;
      font-weight: 500;
      padding-left: 3px;
      padding-right: 3px;
    }
    &__url {
      color: #212529bf;
      text-decoration: none;
    }
    &__content {
      line-height: 1.3;
    }
  }
</style>