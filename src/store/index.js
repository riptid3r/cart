import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    store: [
      {
        name: "Adidas Easy Boost",
        price: 82163,
        image:
          "https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",
        inCart: false,
        count: 0,
        index: 0,
      },
      {
        name: "Adidas Easy Boost",
        price: 82163,
        image:
          "https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",
        inCart: false,
        count: 0,
        index: 1,
      },
      {
        name: "Adidas Easy Boost",
        price: 82163,
        image:
          "https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",
        inCart: false,
        count: 0,
        index: 2,
      },
      {
        name: "Adidas Easy Boost",
        price: 82163,
        image:
          "https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",
        inCart: false,
        count: 0,
        index: 3,
      },
      {
        name: "Adidas Easy Boost",
        price: 82163,
        image:
          "https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",
        inCart: false,
        count: 0,
        index: 4,
      },
      {
        name: "Adidas Easy Boost",
        price: 82163,
        image:
          "https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",
        inCart: false,
        count: 0,
        index: 5,
      },
      {
        name: "Adidas Easy Boost",
        price: 82163,
        image:
          "https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",
        inCart: false,
        count: 0,
        index: 6,
      },
      {
        name: "Adidas Easy Boost",
        price: 82163,
        image:
          "https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",
        inCart: false,
        count: 0,
        index: 7,
      },
      {
        name: "Adidas Easy Boost",
        price: 82163,
        image:
          "https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",
        inCart: false,
        count: 0,
        index: 8,
      },
      {
        name: "Adidas Easy Boost",
        price: 82163,
        image:
          "https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",
        inCart: false,
        count: 0,
        index: 9,
      },
      {
        name: "Adidas Easy Boost",
        price: 82163,
        image:
          "https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",
        inCart: false,
        count: 0,
        index: 10,
      },
      {
        name: "Adidas Easy Boost",
        price: 82163,
        image:
          "https://adidas-athletics.ru/image/cache/catalog/222/666/20190517161772607260-500x440.jpg",
        inCart: false,
        count: 0,
        index: 11,
      },
    ],
    cart: [],
    notifications: [],
  },
  mutations: {
    SET_CARD: async (state, data) => {
      if (data.inCart === true) {
        state.cart.push(data);
      } else {
        for (let i = 0; i < state.cart.length; i++) {
          if (state.cart[i] === data) {
            state.cart.splice(i, 1);
          }
        }
      }
      for (let i = 0; i < state.store.length; i++) {
        if (state.store[i] === data) {
          state.store.splice(i, 1, data);
          break;
        }
      }
    },
    SAVE_ITEM: async (state, data) => {
      for (let i = 0; i < state.notifications.length; i++) {
        if (state.notifications[i].index === data.index) {
          Object.assign(state.notifications[i], data);
        }
      }
    },
    ADD_NOTIF: async (state, data) => {
      state.notifications.push(data);
    },
    SPLICE_NOTIF: async (state, index) => {
      state.notifications.splice(index, 1);
    },
  },
  actions: {
    SAVE_CARD: async (context, data) => {
      context.commit("SET_CARD", data);
    },
    SAVE_NOTIF: async (context, data) => {
      context.commit("ADD_NOTIF", data);
    },
    REMOVE_NOTIF: async (context, data) => {
      context.commit("SPLICE_NOTIF", data);
    },
    SET_ITEM: async (context, data) => {
      context.commit("SAVE_ITEM", data);
    },
  }
});
