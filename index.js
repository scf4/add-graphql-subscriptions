"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addGraphQLSubscriptions(networkInterface, wsClient) {
  networkInterface.subscribe = function (request, handler) {
    return wsClient.subscribe(request, handler);
  };
  networkInterface.unsubscribe = function (id) {
    wsClient.unsubscribe(id);
  };
  return networkInterface;
}
exports.addGraphQLSubscriptions = addGraphQLSubscriptions;
