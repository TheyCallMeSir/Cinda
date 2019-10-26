<template>
  <div>
    <h1>Hexagon Component</h1>
    <ul>
      <li>
        <button
          v-on:click="setValue(item.Value)"
          v-for="item in items"
          v-bind:key="item.index"
        >{{item.Name}}</button>
      </li>
    </ul>

    <p v-if="clickedValue > 0">{{clickedValue}}</p>
  </div>
</template>

<script>
export default {
  name: "Hexagon",
  props: ["items"],
  data() {
    return {
      clickedValue: 0
    };
  },
  methods: {
    setValue: function(value) {
      this.clickedValue = value;
    }
  }
};
</script>
