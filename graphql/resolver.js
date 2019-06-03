module.exports = {
  async hello() {
    return {
      message: "Hello World",
      name: "My name is Blend"
    };
  },
  async cloud() {
    return {
      message: "Hello World",
      cloud: "Portal Cloud NOSi",
      date_add: new Date().toString()
    };
  },

  catalog({ input }) {
    console.log(input);
    return {
      _id: "O+dsasdasdas",
      name: "catalog vps",
      vmemory: "catalog vps",
      vcore: "catalog vps",
      vstorage: "catalog vps",
      price: "catalog vps",
      status: true,
      updated_at: "catalog vps",
      created_at: "catalog vps",
      service_type: "catalog vps"
    }
  }
};
