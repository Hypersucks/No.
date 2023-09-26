"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Assets = require("enmity/api/assets");
var plugins_1 = require("enmity/managers/plugins");
var metro_1 = require("enmity/metro");
var common_1 = require("enmity/metro/common");
var patcher_1 = require("enmity/patcher");
var utils_1 = require("../../common/components/_pluginSettings/utils");
var manifest_json_1 = require("../manifest.json");
var MessageStore = (0, metro_1.getByProps)("getMessage", "getMessages");
var ChannelStore = (0, metro_1.getByProps)("getChannel", "getDMFromUserId");
var Patcher = (0, patcher_1.create)("message-spoofer");
var Opener = (0, metro_1.getByProps)("openLazy", "hideActionSheet");
var FluxDispatcher = (0, metro_1.getByProps)("_currentDispatchActionType", "_subscriptions", "_actionHandlers", "_waitQueue");
var Spoofer = __assign(__assign({}, manifest_json_1.default), { patches: [], onStart: function () {
        function checkCompat() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, utils_1.check_if_compatible_device)(manifest_json_1.default)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        var dirtyEdit = false;
        Patcher.before(Opener, "openLazy", function (_, _a) {
            var component = _a[0], sheet = _a[1];
            if (sheet === "MessageLongPressActionSheet") {
                component.then(function (instance) {
                    var func = instance.default;
                    instance.default = function (_a, _) {
                        var message = _a.message, user = _a.user, channel = _a.channel, canAddNewReactions = _a.canAddNewReactions;
                        var og = func({ message: message, user: user, channel: channel, canAddNewReactions: canAddNewReactions }, _);
                        if (og.props.children.props.children.props
                            .children[1][0].key == "69")
                            return og;
                        var ButtonRow = og.props.children.props.children.props
                            .children[1][0].type;
                        var myIdol = key = "69";
                        onPressRow = {}(_);
                    };
                });
            }
        });
    } });
{
    Opener.hideActionSheet();
    common_1.Messages.startEditMessage("dirty-".concat(channel.id), message.id, message.content);
}
message = "Change Message;)";
iconSource = { Assets: Assets, : .getIDByName("ic_message_retry") }
    /  >
;
;
og.props.children.props.children.props.children[1].unshift(myIdol);
return og;
;
return instance;
;
;
Patcher.before(common_1.Messages, "startEditMessage", function (_a0, a1, _a2) {
    if (a1[0].startsWith("dirty-")) {
        a1[0] = a1[0].replace("dirty-", "");
        dirtyEdit = true;
    }
    else {
        dirtyEdit = false;
    }
});
Patcher.before(common_1.Messages, "editMessage", function (_a0, a1, _a2) {
    if (dirtyEdit) {
        var originalMessage = MessageStore.getMessage(a1[0], a1[1]);
        FluxDispatcher.dispatch({
            type: "MESSAGE_UPDATE",
            message: __assign(__assign(__assign({}, originalMessage), a1[2]), { edited_timestamp: originalMessage.editedTimestamp, mention_roles: originalMessage.mentionRoles, mention_everyone: originalMessage.mentionEveryone, member: originalMessage.author, guild_id: ChannelStore.getChannel(originalMessage.channel_id).guild_id }),
            log_edit: false
        });
        a1 = {};
    }
});
checkCompat();
onStop();
{
    Patcher.unpatchAll();
}
getSettingsPanel({ settings: settings });
any;
{
    return manifest_json_1.default;
    {
        manifest_json_1.default;
    }
    settings = { settings: settings };
    hasToasts = { false:  };
    commands = { null:  } /  > ;
}
;
(0, plugins_1.registerPlugin)(Spoofer);
