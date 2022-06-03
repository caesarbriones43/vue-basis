const app = Vue.createApp({
  //   template: `
  //     <h1>Hola Mundo</h1>
  //     <p>{{true}</p>
  //     `,

  data() {
    return {
      quote: "I'm Batman",
      author: "Bruce Wayne",
    };
  },
  methods: {
    changeQuote() {
      this.author = "Cesar Briones";
    },
  },
});
app.mount("#myApp");
