const { ServiceBroker, Service } = require("moleculer");
const broker = new ServiceBroker();

broker.createService({
  name: "email",
  actions: {
    async sendEmail(context) {
      const { emailID, subject, content } = context.params;
      console.log(`Email is sending to ${emailID} where subject is ${subject}`);
      console.log(`Email content is ${content}`);
      return "Email sent";
    },
  },
});

module.exports = broker;
