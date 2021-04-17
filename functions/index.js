const admin = require("firebase-admin");
admin.initializeApp();
exports.userCodeGenerator = require("./components/users/userCodeGenerator");
exports.roomTimerController = require("./components/communities/roomTimerController");
exports.imageModifier = require("./components/images/imageModifier");
exports.onUserStatusOnlineChange = require("./components/communities/onUserStatusOnlineChange")
exports.onUserRegister = require("./components/users/onUserRegister")
exports.detectBadWords = require("./components/communities/detectBadWords")