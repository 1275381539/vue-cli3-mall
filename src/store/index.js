import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    acrtList:[],

  },
  mutations: {
    addCounter(state,payload){
      payload.count ++ 
      
    },
    addToCart(state,payload){
      payload.checked = true
      state.acrtList.push(payload)
      
    },
  },
  actions: {
    addCart(context,payload){
      return new Promise((resolve,reject)=>{
        let oldProduct = context.state.acrtList.find(item => item.iid === payload.iid)
        if(oldProduct){
          context.commit('addCounter',oldProduct)
          resolve('商品数量+1')
        }else{
          payload.count = 1
          context.commit('addToCart',payload)
          resolve('添加新商品')
        }
      })
    }
  },
  modules: {
  }
})
