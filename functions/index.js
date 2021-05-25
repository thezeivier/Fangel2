const admin = require("firebase-admin");
admin.initializeApp();
exports.colorAndUsernameGenerator = require("./components/users/colorAndUsernameGenerator");
exports.imageModifier = require("./components/images/imageModifier");
exports.onUserStatusOnlineChange = require("./components/communities/onUserStatusOnlineChange")
exports.detectBadWords = require("./components/communities/detectBadWords")