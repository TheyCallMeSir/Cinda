<template>
  <div>
    <div>
      <h1>Finder</h1>
    </div>

    <div>
      <hexagon :items="items"></hexagon>
    </div>
  </div>
</template>

<script>
export default {
  name: "Finder",
  data() {
    return {
      items: [{ Name: "Foo", Value: 100 }, { Name: "Bar", Value: 200 }],
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
</style>
