<template>
  <div class="hello">
    <a href="/" @click.prevent="notifyUser">Test moi encore</a>
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

    <div v-if="displayHelpCli === true" class="cli-plugin">
      <h3>Installed CLI Plugins</h3>
      <ul>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" rel="noopener"
               target="_blank">babel</a></li>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" rel="noopener"
               target="_blank">eslint</a></li>
      </ul>
    </div>

    <div :class="['essential', {'block-warning': displayWarning, 'block-normal': !displayWarning }]">
      <h3>Essential Links</h3>
      <ul>
        <li><a href="https://vuejs.org" rel="noopener" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" rel="noopener" target="_blank">Forum</a></li>
        <li><a href="https://chat.vuejs.org" rel="noopener" target="_blank">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" rel="noopener" target="_blank">Twitter</a></li>
        <li><a href="https://news.vuejs.org" rel="noopener" target="_blank">News</a></li>
      </ul>
    </div>

    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" rel="noopener" target="_blank">vue-devtools</a>
      </li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import {ToastService} from "@/mixins/ToastService";

export default {
  name: 'HelloWorld',
  mixins: [ToastService],
  props: {
    msg: String,
    userTitle: {
      type: String,
      default: 'no-name',
    },
    displayHelpCli: {
      type: Boolean,
      default: false,
    },
    displayWarning: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      d: null,
    }
  },
  created() {

  },
  mounted() {
    this.notifyUser();
  },
  methods: {
    notifyUser() {
      this.AppToast.success('Salut ' + this.userTitle);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.block-normal {
  border: none;
}

.block-warning {
  border: 3px solid tomato;
}
</style>
