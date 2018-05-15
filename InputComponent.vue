<template>
    <div class="siimple-form">
        <div class="siimple-grid">
            <div class="siimple-grid-row">
                <div class="siimple-grid-col siimple-grid-col--4">
                    <siimple-form-select-field label="Type" v-model="current.type" :options="typeOptions"></siimple-form-select-field>
                    <siimple-form-input-field label="Title" v-model="current.title" class="siimple-form-input-primary"></siimple-form-input-field>
                </div>
                <div class="siimple-grid-col siimple-grid-col--4">
                    <siimple-form-select-field label="Project" v-model="current.project" :options="projectOptions"></siimple-form-select-field>
                    <siimple-form-input-field label="Client" v-model="current.client" placeholder="client" type="text" />
                    <siimple-form-input-field label="Reference" v-model="current.ref" placeholder="reference" type="text" />
                </div>
                <div class="siimple-grid-col siimple-grid-col--4">
                    <siimple-form-input-field label="Time" v-model="current.time" placeholder="time" type="number" />
                    <siimple-form-input-field label="Date" v-model="current.date" type="date" placeholder="date" />
                </div>
            </div>
            <div class="siimple-grid-row">
                <div class="siimple-grid-col siimple-grid-col--12" style="text-align: right; padding-right: 10px;">
                    <button @click="addRow()" class="siimple-btn siimple-btn--navy">add row</button>                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
import SiimpleFormInputField from "./SiimpleFormInputField.vue";
import SiimpleFormSelectField from "./SiimpleFormSelectField.vue";

export default {
  mounted() {
    this.$store.commit("initial");
  },
  computed: Vuex.mapState(["current", "projectOptions", "typeOptions"]),
  methods: {
    addRow($event) {
      this.$store.dispatch("iterate");
    }
  },
  components: { SiimpleFormInputField, SiimpleFormSelectField }
};
</script>

<style>
.siimple-form-input-primary input {
  font-weight: bold;
}
</style>
