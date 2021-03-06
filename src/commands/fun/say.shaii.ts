import { defineCommand } from "../../types";
import { SLURS } from "../../constants";
import { randomChoice } from "../../logic/logic.shaii";

export default defineCommand({
  name: "say",
  category: "FUN",
  usage: "say <sentence>",
  aliases: [],
  description: "Say your stupid message",
  requiresProcessing: false,
  execute: async (message) => {
    if (message.args.length === 0) return `what do you want to say ${randomChoice(SLURS)}`;
    message.delete().catch(() => {});
    return message.args.join(" ");
  },
});
