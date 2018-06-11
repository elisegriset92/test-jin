import Vue from 'vue'
import Vuex from 'vuex'

import doing from './modules/doing'
import done from './modules/done'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    value: 0
  },
  modules: {
    doing,
    done
  }
})
