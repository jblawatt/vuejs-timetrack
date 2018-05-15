<template>
    <div class="siimple-form-field">
        <div v-if="hasLabel" class="siimple-form-field-label">{{label}}</div>
        <select class="siimple-input" :value="value" @input="onInput">
            <option v-for="option in options" :value="option.value" :key="option.value">
                {{option.label}}
            </option>
        </select>
    </div>
</template>
<script>
export default {
  props: ["label", "model", "options"],
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