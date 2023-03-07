import {Client, SlashCommandBuilder } from "discord.js";


export const command = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('ping command')

export const action = async(ctx,Pos, Name) => {
    ctx
}