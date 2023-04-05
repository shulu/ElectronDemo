const { Menu, Tray, app } = require("electron");

const trayMenu = Menu.buildFromTemplate([
  { label: "Item 1" },
  { role: "quit" },
]);

function createTray(app, win) {
  const tray = new Tray("./icon@2x.png");
  tray.setToolTip("Tray details");
  tray.on("click", (e) => {
    if (e.shiftKey) {
      app.quit();
    } else {
      win.isVisible() ? win.hide() : win.show();
    }
  });
  tray.setContextMenu(trayMenu);
}

module.exports = createTray;
