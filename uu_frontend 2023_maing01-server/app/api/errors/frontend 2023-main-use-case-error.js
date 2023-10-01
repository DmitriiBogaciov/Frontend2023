"use strict";
const { UseCaseError } = require("uu_appg01_server").AppServer;

class Frontend 2023MainUseCaseError extends UseCaseError {
  static get ERROR_PREFIX() {
    return "uu-frontend 2023-main/";
  }

  constructor(dtoOut, paramMap = {}, cause = null) {
    if (paramMap instanceof Error) {
      cause = paramMap;
      paramMap = {};
    }
    super({ dtoOut, paramMap, status: 400 }, cause);
  }
}

module.exports = Frontend 2023MainUseCaseError;
