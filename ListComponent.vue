<template>
        <div>
            <div class="siimple-table siimple-table--striped">
                <div class="siimple-table-header">
                    <div class="siimple-table-row">
                        <div class="siimple-table-cell">Id</div>
                        <div class="siimple-table-cell">Type</div>
                        <div class="siimple-table-cell">Title</div>
                        <div class="siimple-table-cell">Project</div>
                        <div class="siimple-table-cell">Client</div>
                        <div class="siimple-table-cell">Ref</div>
                        <div class="siimple-table-cell">Time</div>
                        <div class="siimple-table-cell">Date</div>
                        <div class="siimple-table-cell">Actions</div>
                    </div>
                </div>
                <div class="siimple-table-body">
                    <div v-for="item in items" :key="item.id" class="siimple-table-row">
                        <div class="siimple-table-cell" :title="item.id">{{item.id.substring(0,6)}}</div>
                        <div class="siimple-table-cell">{{item.type|typeOption}}</div>
                        <div class="siimple-table-cell">{{item.title}}</div>
                        <div class="siimple-table-cell">{{item.project|projectOption}}</div>
                        <div class="siimple-table-cell" :title="item.client | clientName">{{item.client}}</div>
                        <div class="siimple-table-cell">{{item.ref}}</div>
                        <div class="siimple-table-cell">{{item.time}}</div>
                        <div class="siimple-table-cell">{{item.date}}</div>
                        <div class="siimple-table-cell">
                            <button @click="removeRow(item)" class="siimple-btn siimple-btn--red">x</button>
                            <button @click="takeOver(item)" class="siimple-btn siimple-btn--blue">^</button>
                        </div>
                    </div>
                    <div class="siimple-table-row siimple-table-row-sum">
                        <div class="siimple-table-cell"></div>
                        <div class="siimple-table-cell"></div>
                        <div class="siimple-table-cell"></div>
                        <div class="siimple-table-cell"></div>
                        <div class="siimple-table-cell"></div>
                        <div class="siimple-table-cell"></div>
                        <div class="siimple-table-cell">{{timeSum}}</div>
                        <div class="siimple-table-cell"></div>
                        <div class="siimple-table-cell"></div>
                    </div>
                
                </div>
                
            </div>
        </div>
</template>
<script>
import Vuex from "vuex";

export default {
  props: ["items"],
  methods: {
    removeRow(item) {
      this.$store.dispatch("removeItem", { item });
    },
    takeOver(item) {
      this.$store.dispatch("takeOver", { item });
    }
  },
  computed: {
    timeSum() {
      return this.items.reduce((v, c) => {
        // v + parseInt(c.time, 0);
        let time = parseInt(c.time, 0);
        return isNaN(time) ? v : v + time;
      }, 0);
    }
  }
};
</script>

<style>
.siimple-table-row-sum {
  font-weight: bold;
}
</style>


