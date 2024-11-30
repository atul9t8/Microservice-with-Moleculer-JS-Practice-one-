const { ServiceBroker } = require("moleculer");
const broker = new ServiceBroker();

let user = [];
let generateID = Date.now().toString();

broker.createService({
  name: "user",
  actions: {
    async createUser(context) {
      const { username, email } = context.params;
      const newUser = {
        id: generateID,
        username,
        email,
      };
      user.push(newUser);
      return newUser;
    },
    async getUser() {
      return user;
    },
  },
});
module.exports = broker;
