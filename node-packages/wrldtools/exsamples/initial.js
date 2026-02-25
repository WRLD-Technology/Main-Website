import { WRLD } from "wrldtools";
const wrld = new WRLD({ token: process.env.DISCORD_TOKEN });
await wrld.listRoles("YOUR_GUILD_ID");
