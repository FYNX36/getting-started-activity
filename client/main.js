import { DiscordSDK } from "@discord/embedded-app-sdk";

import "./style.css";
import rocketLogo from '/rocket.png';

// Instantiate the SDK
const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

await discordSdk.ready();
// Once the sdk has established the connection with the discord client, external
// links can be launched
discordSdk.commands.openExternalLink({
  url: 'https://google.com',
});