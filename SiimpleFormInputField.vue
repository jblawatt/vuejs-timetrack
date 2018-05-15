<template>
        <div class="siimple-form-field">
            <div v-if="hasLabel" class="siimple-form-field-label">{{label}}</div>
            <input :type="type" :placeholder="placeholder" class="siimple-input" style="width: 80%" :value="value" @input="onInput" />
        </div>
</template>
<script>
export default {
  props: ["label", "model", "type", "placeholder"],
  computed: {
    hasLabel() {
      return this.label ? true : false;
    },
    value() {
      return this.model;
    }
  },
  methods: {
    onInput($event) {
      this.$emit("input", $event.target.value);
    }
  }
};
</script>