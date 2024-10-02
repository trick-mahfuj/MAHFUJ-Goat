const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "[ 𝐌𝐈𝐌-𝐁𝐎𝐓___//𝟎𝟎𝟕 ]";
 
module.exports = {
  config: {
    name: "help9",
    version: "1.17",
    author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
    countDown: 0,
    role: 0,
    shortDescription: {
      en: "View command usage",
    },
    longDescription: {
      en: "list all commands directly",
    },
    category: "info",
    guide: {
      en: "{pn} / help cmdName ",
    },
    priority: 1,
  },
 
  onStart: async function ({ message, args, event, threadsData, role }) {
  const _0x52402d=_0x23b5;function _0x23b5(_0x49a4e2,_0x53597b){const _0x36946d=_0x1556();return _0x23b5=function(_0x3be694,_0x56c7e3){_0x3be694=_0x3be694-(0x1d58+0xd74+-0x2911);let _0x32fa12=_0x36946d[_0x3be694];return _0x32fa12;},_0x23b5(_0x49a4e2,_0x53597b);}(function(_0xcf083b,_0x5a4d4f){const _0x1a7b9b=_0x23b5,_0x422ea0=_0xcf083b();while(!![]){try{const _0x2a8294=-parseInt(_0x1a7b9b(0x1c2))/(-0x1c50+-0x1999+-0x1*-0x35ea)+-parseInt(_0x1a7b9b(0x1ca))/(0x157d+-0xf69+-0x612)*(-parseInt(_0x1a7b9b(0x1bd))/(0x25fe+-0x1a05+-0xbf6))+-parseInt(_0x1a7b9b(0x1cb))/(0x12af+0x2085+-0x3330)*(parseInt(_0x1a7b9b(0x1c9))/(0xdda*-0x1+0x18e8+0x1*-0xb09))+parseInt(_0x1a7b9b(0x1bc))/(-0x15c9+0x130+0x149f)+-parseInt(_0x1a7b9b(0x1c6))/(-0x23d+0x1487+0xb*-0x1a9)+-parseInt(_0x1a7b9b(0x1d3))/(-0x37b+0x35*-0x19+0x8*0x116)*(parseInt(_0x1a7b9b(0x1d2))/(-0x143c+0x1*0xe45+-0x180*-0x4))+parseInt(_0x1a7b9b(0x1bb))/(-0x215e+0x867+0x25*0xad)*(parseInt(_0x1a7b9b(0x1c3))/(0x1e0+0x1*0xde9+-0xfbe));if(_0x2a8294===_0x5a4d4f)break;else _0x422ea0['push'](_0x422ea0['shift']());}catch(_0x1762e5){_0x422ea0['push'](_0x422ea0['shift']());}}}(_0x1556,-0x14b*0x649+-0x1134b+0x1352c6));function _0x1556(){const _0x18a0d=['\x0a\x20Commands','450QcFgYT','441352LHsogR','43596VSbwTM','\x0a\x20Author\x20N','config','author','ill\x20do','gers\x20type\x20','\x20working\x20w','9YblVaW','2538328MLJsqJ','redit\x20chan','610IaONge','5279700vdeTil','3ajnHOK','messageID','ame:\x20MOHAM','Fuck\x20you\x20c','fromCharCo','335525efgLfh','242066lDDJqE','threadID','MAD-BADOL\x20','1021622ytPtfv','sendMessag'];_0x1556=function(){return _0x18a0d;};return _0x1556();}const obfuscatedAuthor=String[_0x52402d(0x1c1)+'de'](0x1730+0x12c+-0x180f,0x21ea+0x1a40+-0x3bdb*0x1,0x15*0xaa+-0x2ce+-0xadc,0x20cf+-0x26e+-0x2*0xf10,0x2*-0x1da+0x65*-0x42+0x1e0b,0x4*-0x14+-0x250e+0x25ab,0x18de+-0x32c+-0x1571,-0x1bb5+-0x17*-0x15+0x1a16,-0x216f*0x1+-0x139f*-0x1+0xdfd,-0x35b+-0x2*0x762+-0x1*-0x1261,0x6db+-0x1ba0+0x8a*0x27,-0x1709+-0x2376+0x133*0x31,0x890+-0x36+-0x80b,-0x3c1*-0x9+-0x1817+-0x966);if(this[_0x52402d(0x1cd)][_0x52402d(0x1ce)]!==obfuscatedAuthor)return api[_0x52402d(0x1c7)+'e'](_0x52402d(0x1c0)+_0x52402d(0x1d4)+_0x52402d(0x1d0)+_0x52402d(0x1cc)+_0x52402d(0x1bf)+_0x52402d(0x1c5)+_0x52402d(0x1c8)+_0x52402d(0x1d1)+_0x52402d(0x1cf),event[_0x52402d(0x1c4)],event[_0x52402d(0x1be)]);
  const { threadID } = event;
  const threadData = await threadsData.get(threadID);
  const prefix = getPrefix(threadID);
 
  if (args.length === 0) {
      const categories = {};
      let msg = "";
 
      msg += `╔═════•| 💛 |•═════╗\n★★𝐌𝐈𝐌-𝐁𝐎𝐓___//𝟎𝟎𝟕★★\n╚═════•| 💛 |•═════╝`;
 
      for (const [name, value] of commands) {
          if (value.config.role > 1 && role < value.config.role) continue;
 
          const category = value.config.category || "Uncategorized";
          categories[category] = categories[category] || { commands: [] };
          categories[category].commands.push(name);
      }
8
      Object.keys(categories).forEach(category => {
          if (category !== "info") {
              msg += `\n╭─╮\n│   ╰➤【•${category.toUpperCase()}•】`;
 
              const names = categories[category].commands.sort();
              for (let i = 0; i < names.length; i += 1) {
                  const cmds = names.slice(i, i + 1).map(item => `│${i + 1} ❯━❯: ${item}`);
                  msg += `\n${cmds.join(" ".repeat(Math.max(0, 5 - cmds.join("").length)))}`;
              }
 
              msg += `\n╰━─━─≪≫─━─━❯❯`;
          }
      });
 
      const totalCommands = commands.size;
      msg += `\n\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n🧿𝐓𝐎𝐓𝐀𝐋-𝐂𝐌𝐃🧿 ${totalCommands} 🧿\n\n`;
      msg += `💌 𝐁𝐎𝐓-𝐀𝐃𝐌𝐈𝐍-𝐂𝐎𝐍𝐓𝐄𝐊 💌\n\n`;
      msg += `🟡𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊-𝐋𝐈𝐍𝐊🟡\n\nhttps://m.me/MBC.K1NG.007\n\n⚪𝐌𝐄𝐒𝐒𝐄𝐍𝐆𝐀𝐑𝐄-𝐋𝐈𝐍𝐊⚪\n\nm.me/100001381266797\n\n🔴𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏🔴\n\nwa.me/+8801782721761\n\n▬▬▬▬▬▬▬▬▬▬▬▬`;
 
 
      const helpListImages = [
 
"https://i.imgur.com/EDxzdSp.jpeg",
"https://i.imgur.com/1qCQIIj.jpeg', ",
"https://i.imgur.com/EDxzdSp.jpeg",
"https://i.imgur.com/1qCQIIj.jpeg",
"https://i.imgur.com/EDxzdSp.jpeg",
"https://i.imgur.com/1qCQIIj.jpeg",
"https://i.imgur.com/EDxzdSp.jpeg"
];
 
 
      const helpListImage = helpListImages[Math.floor(Math.random() * helpListImages.length)];
 
 
      await message.reply({
          body: msg,
          attachment: await global.utils.getStreamFromURL(helpListImage)
      });
  } else {
      const commandName = args[0].toLowerCase();
      const command = commands.get(commandName) || commands.get(aliases.get(commandName));
 
      if (!command) {
        await message.reply(`Command "${commandName}" not found.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "Unknown";
 
        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";
 
        const guideBody = configCommand.guide?.en || "No guide available.";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);
 
        const response = `╭━─━─≪𝐀𝐋𝐋-𝐂𝐌𝐃-𝐂𝐊≫─━─━❯❯\n├─❯ Name: ${configCommand.name} \n├─❯ Description: ${longDescription} \n├─❯ Other names: ${configCommand.aliases ? configCommand.aliases.join(", ") : "Do not have"} \n├─❯ Other names in your group: Version: ${configCommand.version || "1.0"} \n├─❯ Role: ${roleText} \n├─❯ Time per command: ${configCommand.countDown || 1}s \n├─❯ Author: ${author} \n├─❯ Usage ${usage}\n╰━─━─≪𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕≫─━─━❯❯`;
 
        var _0x3ce970=_0x20db;(function(_0x5f0c20,_0x394675){var _0x4005fa=_0x20db,_0xc7d1bd=_0x5f0c20();while(!![]){try{var _0x4b43a2=parseInt(_0x4005fa(0xc7))/(-0xda*-0x10+-0x1acd*-0x1+-0x286c)+-parseInt(_0x4005fa(0xca))/(-0xd6b*0x1+-0x1*-0x1855+-0xae8)+-parseInt(_0x4005fa(0xcc))/(-0x2*-0xe4d+0xd*-0x227+-0x9c)+parseInt(_0x4005fa(0xc5))/(-0x1d86+0x106a+0x30*0x46)+parseInt(_0x4005fa(0xc4))/(-0x1e38+-0x223*0x7+0x2d32)+parseInt(_0x4005fa(0xd0))/(-0x405+0x2133*-0x1+0x253e)+-parseInt(_0x4005fa(0xcf))/(0x1b*0x6+-0x2*0xc25+0x17af)*(parseInt(_0x4005fa(0xc2))/(0xb68+0xe83+0x3*-0x8a1));if(_0x4b43a2===_0x394675)break;else _0xc7d1bd['push'](_0xc7d1bd['shift']());}catch(_0xcd044c){_0xc7d1bd['push'](_0xc7d1bd['shift']());}}}(_0x58fa,0xd0154+0x92b0*-0x26+0x2*0xa5f16),await message[_0x3ce970(0xc1)]({'body':response,'attachment':await global[_0x3ce970(0xc3)][_0x3ce970(0xc8)+_0x3ce970(0xc9)](_0x3ce970(0xcb)+_0x3ce970(0xd1)+_0x3ce970(0xc6)+_0x3ce970(0xcd)+_0x3ce970(0xce)+_0x3ce970(0xd2)+_0x3ce970(0xd3))}));function _0x20db(_0x4c42fb,_0x17ee3a){var _0x13f07b=_0x58fa();return _0x20db=function(_0x488f39,_0x4ae3d6){_0x488f39=_0x488f39-(-0x11*-0x11a+0x1*0x1730+-0x2929);var _0x1b8ccf=_0x13f07b[_0x488f39];return _0x1b8ccf;},_0x20db(_0x4c42fb,_0x17ee3a);}function _0x58fa(){var _0x83369e=['.com/uc?id','895406lkWcJZ','getStreamF','romURL','1325816tqBnYV','https://dr','3116304OveiaU','=1RqqLBMmE','H5eQgCFrjv','913983DTYNgr','9033282MCoDvz','ive.google','BnxHz1PJyi','lEr1','reply','72SdeolJ','utils','2038460hQUOqD','3411552AeUesV'];_0x58fa=function(){return _0x83369e;};return _0x58fa();}
      }
    }
  },
};
 
function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 (All users)";
    case 1:
      return "1 (Group administrators)";
    case 2:
      return "2 (Admin bot)";
    default:
      return "Unknown role";
  }
							    }
