import { SlashCommandBuilder } from "discord.js";
import {lists} from '@/main'


export const command = new SlashCommandBuilder()
    .setName('list')
    .setDescription('list out all the positions where you can tp to')

export const action = async(ctx) => {
    let allpos = '以下為可傳送的地點：  ' 
    for(const list of lists){
        allpos += '\n' + list 
    }
    ctx.reply(allpos)
}