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

loadEvents()



client.login(process.env.TOKEN);