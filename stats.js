const os = require('os'); // module system

// console.log(os.platform());

setInterval(() => {
    // desestruturation or const freemen = os.freemen()
    const { freemem, totalmem } = os;

    const total = parseInt(totalmem() / 1024 / 1024)
    const free = parseInt(freemem() / 1024 / 1024)
    const percents = parseInt((free / total) * 100);

    const stats = {
        free: `${free} MB`,
        total: `${total} MB`,
        usage: `${percents} %`,
    };

    console.clear();
    console.log("=== PC STATS === ");
    console.table(stats)
}, 1000)

    ;
