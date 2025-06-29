export default {
  name: "PaymentPage",
  data() {
    return {
      data1: "hello",
      name: "sabari"
    };
  },
  computed: {
    uppername() {
      return this.name.toUpperCase();
    }
  },
  methods: {
    toggleName() {
      this.name = this.name === "sabari" ? "james" : "sabari";
    }
  }
};
