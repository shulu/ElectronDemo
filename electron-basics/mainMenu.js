const { dialog, Menu } = require("electron");

const menus = [
  {
    label: "Electron",
    submenu: [
      {
        label: "Item1",
      },
      {
        label: "Item2",
        submenu: [
          {
            label: "Sub Item 1",
          },
        ],
      },
    ],
  },
  {
    label: "Edit",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { role: "copy" },
      { role: "paste" },
    ],
  },
  {
    label: "Actions",
    submenu: [
      {
        label: "DevTools",
        role: "toggleDevTools",
      },
      {
        role: "toggleFullScreen",
      },
      {
        label: "Greet",
        click: () => {
          console.log("Hello form main Meny");
        },
        accelerator: "Shift+Alt+G",
      },
      {
        label: "hello Dialog",
        click: () => {
          const answers = ["Yes", "No", "Maybe"];
          dialog
            .showMessageBox(null, {
              title: "Message Box",
              message: "Please select an option",
              detail: "Message details",
              buttons: answers,
            })
            .then(({ response }) => {
              console.log(`User selected: ${answers[response]}`);
            });
        },
      },
    ],
  },
];

const mainMenu = (args, cb) => {
  return Menu.buildFromTemplate([
    {
      label: "Electron",
      submenu: [
        {
          label: "Item1",
        },
        {
          label: "Item2",
          submenu: [
            {
              label: "Sub Item 1",
            },
          ],
        },
      ],
    },
    {
      label: "Edit",
      submenu: [
        { role: "undo" },
        { role: "redo" },
        { role: "copy" },
        { role: "paste" },
      ],
    },
    {
      label: "Actions",
      submenu: [
        {
          label: "DevTools",
          role: "toggleDevTools",
        },
        {
          role: "toggleFullScreen",
        },
        {
          label: "Greet",
          click: () => {
            console.log("Hello form main Meny");
          },
          accelerator: "Shift+Alt+G",
        },
        {
          label: "hello Dialog",
          click: () => {
            const answers = ["Yes", "No", "Maybe"];
            dialog
              .showMessageBox(null, {
                title: "Message Box",
                message: "Please select an option",
                //detail: "Message details",
                detail: args,
                buttons: answers,
              })
              .then(({ response }) => {
                console.log(`User selected: ${answers[response]}`);
              });
            cb("here is mainMenu");
          },
        },
      ],
    },
  ]);
};

module.exports = mainMenu;
