<template>
  <div class="siimple-grid">
      <div class="siimple-row" v-for="item in groupedItems" :key="item.key">
          <h2>{{item.key}}</h2>
          <list-component :items="item.value"></list-component>
      </div>
  </div>
</template>

<script>
import moment from "moment";
import ListComponent from "./ListComponent.vue";

let createReducer = prop => {
  return (r, c) => {
    let key = c[prop];
    r[key] = r[key] || [];
    r[key].push(c);
    return r;
  };
};

export default {
  props: ["groupProperty"],
  computed: {
    groupedItems() {
      console.log("groupProperty", this.groupProperty);
      let redobj = this.$store.state.items.reduce(
        createReducer(this.groupProperty),
        {}
      );

      return Object.keys(redobj)
        .sort((left, right) => {
          return moment(left, "YYYY-MM-DD").diff(moment(right, "YYYY-MM-DD"));
        })
        .reverse()
        .map(key => {
          return {
            key,
            value: redobj[key]
          };
        });
    }
  },
  components: { ListComponent }
};
</script>

