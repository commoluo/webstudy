Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button>
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})

var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})

var watchExampleVM=new Vue({
  el:"#watch-example",
  data:{
      question:'',
      answer:'I cannot give you an answer until you ask a question!'
  },
  watch: {
    question:function(newQuestion, oldQuestion){
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  
})


var temptestVM =new Vue({
  el:'#temp-example',
  data:{
    items:[
      {msg: "xfgsdgdg"},
      {msg: "165161"},
      {msg: "dsf65sf46"},
    ]
  }
})

var dfnslasfdVM= new Vue({
  el:'#sfsf',
  methods: {
    warn: function (message, event) {
      // 现在我们可以访问原生事件对象
      if (event) {
        event.preventDefault()
      }
      console.log("test");

    },
  }}
  )


var forVM=new Vue({
  el:"#example-4",
  data: {
    picked: ''
  }
})

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

var componentVM = new Vue({
  el:"#components-demo"
})



var blogVM=new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
    { id: 1, title: 'My journey with Vue' },
    { id: 2, title: 'Blogging with Vue' },
    { id: 3, title: 'Why Vue is so fun' }],
    postFontSize: 1
  }
})