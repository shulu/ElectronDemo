const { contextBridge, ipcRenderer } = require("electron");
var os = require('os');
var process = require('child_process');

//referer: https://www.88cto.com/article/1f2OU7Xl
function getGraphics() {
    return new Promise((resolve, reject) => {
        process.exec('system_profiler SPDisplaysDataType -json', ((error, stdout, stderr) => {
            if (error) {
                reject(error, stderr);
            } else {
                let data = JSON.parse(stdout);
                let result = []
                data.SPDisplaysDataType.forEach(item => {
                    // console.log(item)
                    let vendor = item.spdisplays_vendor;
                    if(vendor.indexOf('amd')!=-1){
                        vendor = 'AMD';
                    }
                    result.push({
                        name: item.sppci_model,
                        builtin: item.sppci_bus == 'spdisplays_builtin',
                        vendor: vendor,
                        vram: item.spdisplays_vram_shared || item.spdisplays_vram

                    })
                })

                resolve(result);
            }
        }));
    })
}
contextBridge.exposeInMainWorld("api", {
    getOsInfo: () => os.cpus(),
    getMem: () => os.totalmem(),
    getGraphic: () => getGraphics()
})