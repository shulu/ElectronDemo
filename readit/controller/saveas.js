/*
 * @Author: shulu
 * @Date: 2023-05-04 16:09:13
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-05 15:42:04
 * @Description: file content
 * @FilePath: \readit\controller\saveas.js
 */
const { Menu, dialog } = require('electron');
const path = require('path');
const Jimp = require('jimp');
const randomstring = require('randomstring');
const saveas = async (srcUrl) => {
    if (srcUrl) {
        const contextMenu = Menu.buildFromTemplate([
            {
                label: 'save as...',
                click: async () => {
                    Jimp.read(srcUrl)
                        .then(async (image) => {
                            // Do stuff with the image.
                            const { filePath, canceled } = await dialog.showSaveDialog({
                                title: '图片另存为...',
                                defaultPath: path.resolve(
                                    __dirname,
                                    '../public/download/' + randomstring.generate(10) + '.' + image.getExtension(),
                                ),
                            });
                            if (!canceled) {
                                image.writeAsync(filePath);
                            }
                        })
                        .catch((err) => {
                            // Handle an exception.
                            console.log(`output->err`, err);
                        });
                },
            },
        ]);
        contextMenu.popup();
    }
};

module.exports = saveas;
