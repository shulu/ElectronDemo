/*
 * @Author: shulu
 * @Date: 2023-04-04 14:44:08
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-06 14:42:38
 * @Description: file content
 * @FilePath: /electron-basics/app.js
 */
document.querySelector("#btn").addEventListener("click", () => {
  console.log(0);
  myApi.handleSend();
});
document.querySelector("#btn_copy").addEventListener("click", () => {
  myApi.copyBoard();
  myApi.showCopy();
});
