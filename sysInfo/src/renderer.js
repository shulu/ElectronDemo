const CPU = document.getElementById("cpu");
const MEM = document.getElementById("mem");
const GRAPHICS = [
    document.getElementById("graphics-first"),
    document.getElementById("graphics-second")
]
const usage = api.getOsInfo();
const cpu = usage[0].model
const mem = api.getMem()/1024/1024/1024;

CPU.innerText = `CPU: ${cpu}`
MEM.innerText = `MEM: ${mem}G`
api.getGraphic().then(res => {
    res.forEach((e,index) => {
        var g = e.vendor +" "+ e.name +" "+ e.vram;
        GRAPHICS[index].innerText = ` GRAPHINCS: ${g}`;
    });
})