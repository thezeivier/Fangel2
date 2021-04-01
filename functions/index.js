const admin = require("firebase-admin");
exports.userCodeGenerator = require("./components/users/userCodeGenerator");
exports.roomTimerController = require("./components/communities/roomTimerController");
admin.initializeApp();