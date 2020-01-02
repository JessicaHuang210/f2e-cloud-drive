module.exports = [
  {
    path: "/",
    component: async () =>
      await import("pages/Home").then(module => {
        console.log(module);
        return module.default();
      })
  }
];
