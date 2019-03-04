new Vue({
  el: "#root",
  data: {
    inputField: "",
    items: []
  },
  created: function() {},
  methods: {
    showInput: function() {
      this.items.push(this.inputField);
    }
  }
});
