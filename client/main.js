import { DiscordSDK } from '@discord/embedded-app-sdk';

// Initialize the Discord SDK with your client ID
const discordSdk = new DiscordSDK('1220807309068996728');

// Wait for the SDK to be ready
await discordSdk.ready();

// Once the SDK has established the connection with the Discord client, external links can be launched
discordSdk.commands.openExternalLink({
  url: 'https://google.com',
});