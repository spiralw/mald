import { musicMiddleware } from "../../middleware/musicMiddleware.shaii";
import { defineCommand } from "../../types";

export default defineCommand({
  category: "MUSIC",
  name: "skip",
  usage: "skip",
  aliases: ["next"],
  description: "Skips to the next song in the queue",
  requiresProcessing: false,
  execute: async (message) => {
    return musicMiddleware(message, async (channel, player) => {
      player.skip();
      return await player.createNowPlayingEmbed(true);
    });
  },
});
