"use strict";
const Frontend 2023MainAbl = require("../../abl/frontend 2023-main-abl.js");

class Frontend 2023MainController {
  init(ucEnv) {
    return Frontend 2023MainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return Frontend 2023MainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return Frontend 2023MainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new Frontend 2023MainController();
