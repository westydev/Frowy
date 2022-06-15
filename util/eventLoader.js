const reqMainEvent = (event) => require(`../events/${event}`);
const reqModlogEvent = (event) => require(`../events/modlogEvent/${event}`)

module.exports = client => {
  client.on("ready", () => reqMainEvent("ready")(client))
  client.on("message", reqMainEvent("message"));

  client.on("messageDelete", reqModlogEvent("messageDelete"))
};
