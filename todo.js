
import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";
import InputComponent from "./InputComponent.vue";
import ListGroupComponent from "./ListGroupComponent.vue";
import { store as todoStore } from "./todoStore";


moment.locale('de');


const FilterComponent = Vue.extend({
    template: `
        <div class="siimple-form">
            <div class="siimple-form-field">
                <div class="siimple-form-field-label">Date</div>
                <select class="siimple-select">
                    <option v-for="d in dates">
                        {{d}}
                    </option>
                </select>
            </div>
        </div>
    `,
    computed: {
        dates() {
            return this.$store.state.items.map(i => i.date);
        }
    }
});



Vue.filter('typeOption', function (value) {
    let f = todoStore
        .state
        .typeOptions
        .filter(i => i.code == value);
    return f.length ? f[0].name : value;
});

Vue.filter('projectOption', function (value) {
    let f = todoStore
        .state
        .projectOptions
        .filter(i => i.value == value);
    return f.length ? f[0].display : value;

})

Vue.filter('clientName', (value) => {
    let f = todoStore
        .state
        .clients[value + ""];
    return f ? f : "";

});

Vue.filter('dateformat', value => {
    let mom = moment(value, "YYYY-MM-DD");
    return mom.format('MMM Do YYYY');
});

let todo = new Vue({
    el: '#todo',
    store: todoStore,
    components: {
        InputComponent, ListGroupComponent, FilterComponent,
    },
    computed: {
        groupOptions() {
            return this.$store.state.groupOptions;
        },
        groupFilter() {
            return this.$store.state.selectedGroupOption;
        }
    },
    methods: {
        applyFilter(filterValue) {
            this.$store.commit('applyFilter', filterValue);
        }
    }
});

window.todo = todo;
window.todoStore = todoStore;