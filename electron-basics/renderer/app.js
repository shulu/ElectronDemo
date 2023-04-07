/*
 * @Author: shulu
 * @Date: 2023-04-04 14:44:08
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-07 11:20:19
 * @Description: file content
 * @FilePath: /electron-basics/app.js
 */
document.querySelector("#btn").addEventListener("click", () => {
  console.log(0);
  window.myAPI.handleSend();
});
document.querySelector("#btn_copy").addEventListener("click", () => {
  window.myAPI.writeTextToClipboard("hello clipboard");
  window.myAPI.readTextFromClipboard();
  // clipboard.writeText("hello clipboard");
  // clipboard.readText();
});
