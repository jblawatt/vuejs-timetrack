import Vue from "vue";
import Vuex from "vuex";

import moment from "moment";
import { v4 as guid } from "uuid"

Vue.use(Vuex);

function _loadItems() {
    let data = localStorage.getItem('storage-items');
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
}


window.guid = guid;


const todoStore = new Vuex.Store({
    state: {
        current: {},
        items: _loadItems(),
        projectOptions: [
            { value: 'mah', label: 'MAH Gruppe' },
            { value: 'wshop', label: 'w.shop' },
            { value: '230344', label: 'Ottenbruch' }
        ],
        typeOptions: [
            { value: 'dev', label: 'Entwicklung' },
            { value: 'con', label: 'Konzeption' },
            { value: 'verw', label: 'Verwaltung' },
            { value: 'proj', label: 'Projektmanagement' },
        ],
        clients: {
            '111383': 'Kreiller Traunstein',
        },
        groupOptions: [
            { code: 'date', label: 'Date' },
            { code: 'project', label: 'Project' },
        ],
        selectedGroupOption: 'date'
    },
    mutations: {
        initial(state) {
            state.current = {
                id: guid(),
                date: moment().format('YYYY-MM-DD'),
                project: null,
                client: null,
                time: 0,
                title: null,
            };
        },
        change(state) {
            let ids = state.items.map(i => i.id);
            if (ids.indexOf(state.current.id) > -1) {
                state.items = state.items.map(i => {
                    if (i.id == state.current.id) {
                        return Object.assign({}, state.current);
                    } else {
                        return i;
                    }
                })
            } else {
                state.items = state.items.concat([Object.assign({}, state.current)]);
            }
        },
        set(state, item) {
            state.current = Object.assign({}, item);
        },
        remove(state, item) {
            state.items = state.items.filter(i => {
                if (i.id != item.id) {
                    return Object.assign({}, i);
                }
            });
        },
        applyFilter(state, value) {
            state.selectedGroupOption = value;
        }
    },
    actions: {
        iterate({ commit, state }, payload) {
            commit('change');
            commit('initial');
        },
        removeItem({ commit, state }, payload) {
            if (confirm('remove??')) {
                commit('remove', payload.item);
            }
        },
        takeOver({ commit, state }, payload) {
            commit('set', payload.item);
        }
    }
});



todoStore.subscribe((mutation, state) => {
    switch (mutation.type) {
        case 'change':
        case 'remove':
            localStorage.setItem('storage-items', JSON.stringify(state.items));
            break;
        default:
            break;
    }
});


export const store = todoStore;