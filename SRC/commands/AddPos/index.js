import { SlashCommandBuilder } from "discord.js";
import {lists} from '@/main';

export const command = new SlashCommandBuilder()
    .setName('add')
    .setDescription('Add position')
    .addStringOption(option =>
        option
            .setName('pos')
            .setDescription('position where you want to add'))

export const action = async(ctx) => {
    const pos = ctx.options.getString('pos')
    let unaddedpos = []
    lists.push(pos)
    unaddedpos.push(pos)
    console.log(unaddedpos)
    ctx.reply('已添加地點用/list來查看')
}