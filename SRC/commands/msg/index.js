import { SlashCommandBuilder } from "discord.js";


export const command = new SlashCommandBuilder()
    .setName('msg')
    .setDescription('list out all the positions where you can tp to')

export const action = async(ctx) => {
    let msg
    ctx.channel.messages.fetch('1096340290241036289')
        .then(message => msg = message)
        .cache(console.error)
}