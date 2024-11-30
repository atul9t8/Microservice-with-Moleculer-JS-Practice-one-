const UserService = require("./services/userService");
const EmailService = require("./services/emailService");

async function startApp() {
  await UserService.start();
  await EmailService.start();
  try {
    const newUser = await UserService.call("user.createUser", {
      username: "Jhon",
      email: "jhon@gmail.com",
    });
    console.log("New User", newUser);
    const getAllUser = await UserService.call("user.getUser");
    console.log("All User", getAllUser);

    //Email Service
    const sendingEmail = await EmailService.call("email.sendEmail", {
      emailID: newUser.email,
      subject: "This is the main subject",
      content: "Thank you!",
    });
    console.log(sendingEmail);
  } catch (err) {
    console.log("Error:", err);
  } finally {
    UserService.stop();
    EmailService.stop();
  }
}

startApp();
