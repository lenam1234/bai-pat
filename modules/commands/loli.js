module.exports.config = {
  name: "loli",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Trung Kien",
  description: "Random ảnh tw :))",
  commandCategory: "nsfw",
  usages: "tw2",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://trungkien.tk/apiv1/tw.php').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            attachment: fs.createReadStream(__dirname + `/cache/tw.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tw.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/tw.${ext}`)).on("close", callback);
      })
}