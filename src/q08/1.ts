const size20 = parseInt(process.argv[2]);

if (isNaN(size20)) {
    console.log("Please provide a size12 (e.g., ts-node 12.ts 5)");
    process.exit(1);
}
for (let i = 0; i < size20; i++) {
    let row = "";
    let startNum = size20 - i;
    for (let j = startNum; j >= 1; j--) {
        row += j.toString();
    }  
    console.log(row);
}