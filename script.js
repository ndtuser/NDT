const images = document.querySelectorAll(".plugin img");
const infoBox = document.getElementById("info-box");

// Görsellere ait açıklamalar:
const pluginInfo = {
  ncore: {
    title: "NCore Plugin",
    desc: "Essentially, it’s a plugin that provides the essential functions of a server. It includes an authentication system for extra security, which also supports password-free login without compromising safety. The server MOTD editing feature helps prevent your plugin list from becoming unnecessarily large.<br><br>Its main goal is to reduce clutter by combining basic functions into a single plugin, while also ensuring a visually appealing appearance. For example, with the WorldGuard plugin, you can’t freely edit the names of the regions you create. However, with this plugin, you can customize region names using the PlaceholderAPI, and also modify the chat prefix or the prefixes used in plugin messages. You can fully customize the message content as well.<br><br>It provides spawn control for both SMP and Minigame servers, allowing you to define player spawn locations—whether when they join the server or after they die. With PlaceholderAPI support, you can easily display any information you want, both within this plugin and in other plugins.<br><br>And this is just the beginning — we plan to continue developing and expanding it further."
  },
  nvault: {
    title: "NVault Plugin",
    desc: "This is an economy database plugin inspired by the original Vault plugin. The main reason for its development is that, although the existing plugin is still widely used, it hasn’t been updated for a long time and may soon become outdated.<br><br>At the moment, it’s still in the early stages of development and not yet compatible with many other plugins. For this reason, we’ve decided not to release it publicly for now."
  },
  nbank: {
    title: "NBank Plugin",
    desc: "This plugin is designed to make things a bit more interesting by taking economic management to a whole new level. It doesn’t work without NVault, as it relies on it as a core dependency.<br><br>It connects two separate databases: the main database, which holds the player’s wallet balance, and the personal database, which contains the money stored in their bank account. The difference between these two values can be negative — meaning a debt system is in place. And trust me, you don’t want to be in debt! The bank will do everything it can to make you regret it.<br><br>But don’t worry — you won’t end up in jail if you fail to pay your debt 😄. The only extra commission is applied to both purchased and sold items, and also if you have more than a certain amount of money in your wallet at the end of the day. Of course, this continues until your debt is fully paid off.<br><br>The plugin is still in development, and we’ll begin coding once our NVault plugin reaches the stage where we can properly integrate this system."
  }
};

// Başlangıçta NCore seçili
updateInfo("ncore");

images.forEach(img => {
  img.addEventListener("click", () => {
    // Tüm görsellerden 'selected' kaldır
    images.forEach(i => i.classList.remove("selected"));
    // Tıklanan görsele ekle
    img.classList.add("selected");

    // Class adına göre bilgi güncelle
    const pluginClass = img.classList[0];
    updateInfo(pluginClass);
  });
});

function updateInfo(pluginName) {
  const info = pluginInfo[pluginName];
  infoBox.innerHTML = `
    <h2>${info.title}</h2>
    <p>${info.desc}</p>
  `;
}
