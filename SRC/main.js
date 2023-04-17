import { Client, Events, GatewayIntentBits } from 'discord.js'
import vueInit from '@/core/vue'
import dotenv from 'dotenv'
import {loadCommand,loadEvents} from '@/core/loader'
import {useAppStore} from '@/store/app'

vueInit()

dotenv.config()

loadCommand()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const appStore = useAppStore()
appStore.client= client
export let lists = ['1264 63 -881 主村莊','10671 75 8062 林地府邸']

loadEvents()



client.login(process.env.TOKEN);