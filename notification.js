const EventEmitter = require("events");

const notificationEmitter = new EventEmitter();

notificationEmitter.on("notificationCreated", (message) => {
  console.log(`Email Notification: ${message}`);
});

notificationEmitter.on("notificationCreated", (message) => {
  console.log(`SMS Notification: ${message}`);
});

notificationEmitter.on("notificationCreated", (message) => {
  console.log(`App Notification: ${message}`);
});

notificationEmitter.emit("notificationCreated", "You have a new notification!");
