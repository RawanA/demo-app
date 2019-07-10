<template>
<section class="section container">
  <div class="container-fluid">
  <h1 class="header">Album List</h1>
  </div>
  <div id="album" >
    <ul>
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
        <li v-for="post in posts"  v-bind:key="post.id" style="margin-bottom: 2rem;" data-aos="slide-up" data-aos-offset="100" data-aos-easing="ease-out-back">
          <div class="card">
            <img :src="post.thumbnailUrl"/> 
            <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <div class="card-content">
              <div class="content">
                <a :href="post.url" class="btn btn-primary">More</a>
              </div>
            </div>
            </div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</section>

</template>
<script>


import AOS from 'aos'
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)


export default {

 name: 'album',
  data () {
    return {
    posts: [],
    limit: 6,
    busy: false
    }
  },
  methods: {
    loadMore() {
      this.busy = true;
      this.$axios.get("https://jsonplaceholder.typicode.com/photos").then(response => {
        const append = response.data.slice(
          this.posts.length,
          this.posts.length + this.limit
        );
        this.posts = this.posts.concat(append);
        this.busy = false;
      });
    }
  },
  created() {
    this.loadMore();
  }
};
AOS.init();

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.header{
  background-color: beige;
  
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/*taplate */
@media only screen and (max-width: 768px)  {

  .card {
    width: 100px
  }
  .card-title {
    display: none;
  }
}

/* iPhone */
@media only screen and (min-width: 450px)  {

  .card {
    width: 200px
  }
}

/* computer screen */
@media only screen and (min-width: 1280px)  {

  .card {
    width: 350px;
    height: 300px;
  }
  
}
</style>
