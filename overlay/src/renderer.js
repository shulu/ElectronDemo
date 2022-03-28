const CPU_USAGE = document.getElementById("cpu");
const CLOSE_BTN = document.getElementById("close")

CLOSE_BTN.addEventListener("click", () => {
    api.close();
});

setInterval(updateStats, 1000);

async function updateStats(){
    const usage = await api.getCurrentLoad();
    const cpUsed = usage.currentLoad;
    CPU_USAGE.innerText = `CPU: ${cpUsed.toFixed(1)}%`
}