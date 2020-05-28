/**
 *
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Messenger For Humans Of FAST NUCES - Karachi
 * Inspired with help from https://developers.facebook.com/docs/messenger-platform/getting-started/sample-apps/original-coast-clothing
 */

"use strict";

// Imports dependencies
const Response = require("./response"),
  config = require("./config"),
  i18n = require("../i18n.config");

module.exports = class VisitPage {
  constructor(user, webhookEvent) {
    this.user = user;
    this.webhookEvent = webhookEvent;
  }

  handlePayload(payload) {
    let response = "";

    switch (payload) {
      case "FACEBOOK":
        response = [
          Response.genText(
            i18n.__("visit.facebook")
          ),
          Response.genGenericTemplate()
        ]
        Response.genGenericTemplate(
          `${config.appUrl}\facebook.png`,
          i18n.__("facebook.title"),
          i18n.__("facebook.subtitle"),
          i18n.__("facebook.visit"),
        );
        break;

      case "WEBSITE":
        response = [
          Response.genText(
            i18n.__("visit.website")
          ),
          Response.genGenericTemplate(
            `${config.appUrl}/heroku.png`,
            i18n.__("website.title"),
            i18n.__("website.visit"),
          )
        ];
        break;

      default:
        break;
    }

    return response;
  }
};
