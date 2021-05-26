const admin = require("firebase-admin");
admin.initializeApp();

exports.colorAndUsernameGenerator = require("./components/users/colorAndUsernameGenerator").colorAndUsernameGenerator;
exports.imageModifier = require("./components/images/imageModifier").imageModifier;
exports.onUserStatusOnlineChange = require("./components/communities/onUserStatusOnlineChange").onUserStatusOnlineChange;
exports.detectBadWords = require("./components/communities/detectBadWords").detectBadWords;
exports.deleteSocialSpaces = require("./components/users/deleteSocialSpaces").deleteSocialSpaces;