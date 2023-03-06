import { SlashCommandBuilder } from "discord.js";


export const command = new SlashCommandBuilder()
    .setName('help')
    .setDescription('To see what commands you can use')

export const action = async(ctx) => {
    ctx.reply(process.env.HELPS)
}