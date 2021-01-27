client.on("message", async vajinahastasıyım => {
let amlılar = "amlı rol idsi"
if (vajinahastasıyım.content === "amsay") {
vajinahastasıyım.channel.send(`Sunucumuzda toplam ${vajinahastasıyım.guild.roles.cache.get(amlılar).size} adet amlı var!!!!! hrr`)
return;
}
})
