const admin = require("firebase-admin");
admin.initializeApp();
exports.userCodeGenerator = require("./components/users/userCodeGenerator");
exports.roomTimerController = require("./components/communities/roomTimerController");
exports.imageModifier = require("./components/images/imageModifier");