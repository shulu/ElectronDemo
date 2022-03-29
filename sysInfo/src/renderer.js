const CPU = document.getElementById("cpu");
const MEM = document.getElementById("mem");
const GRAPHICS = [
    document.getElementById("graphics-first"),
    document.getElementById("graphics-second")
]
const REPORT_BTN = document.getElementById("report")

const usage = api.getOsInfo();
const cpu = usage[0].model
const mem = Math.round(api.getMem()/1024/1024/1024);
CPU.innerText = `CPU: ${cpu}`
MEM.innerText = `MEM: ${mem}G`

api.getGraphic().then(res => {
    res.forEach((e,index) => {
        var g = e.vendor +" "+ e.name +" "+ e.vram;
        GRAPHICS[index].innerText = ` GRAPHINCS: ${g}`;
    });
})


REPORT_BTN.addEventListener("click", () => {
    var sort = document.getElementById("sort").value
    var data = {
        cpu: usage[0].model,
        mem: mem,
        sort: sort
    }
    api.report(data);
})


