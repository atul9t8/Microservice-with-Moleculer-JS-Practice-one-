const UserService = require("./services/userService");

async function startApp() {
  await UserService.start();
  try {
    const newUser = await UserService.call("user.createUser", {
      username: "Jhon",
      email: "jhon@gmail.com",
    });
    console.log("New User", newUser);
    const getAllUser = await UserService.call("user.getUser");
    console.log("All User", getAllUser);
  } catch (err) {
    console.log("Error:", err);
  } finally {
    UserService.stop();
  }
}

startApp();
