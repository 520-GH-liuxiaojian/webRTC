(async function () {
    // 呈现当前设备下的所有设备 【navigator.mediaDevices.enumerateDevices() 是 promise】
    // 得到的结果的第一个的第二个的就是一样 第一个设备就是默认设备
    const devices = await navigator.mediaDevices.enumerateDevices()
    console.log(devices)
})()
