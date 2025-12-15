const size11 = parseInt(process.argv[2]);

if (isNaN(size11)) {
    console.log("Please provide a size11 (e.g., ts-node 21.ts 5)");
    process.exit(1);
}

for (let i = 0; i < size11; i++) {
    let row = "";
    for (let j = 0; j < size11; j++) {
        // พิมพ์เลขตามลำดับคอลัมน์ (เริ่มจาก 1)
        // j คือ 0, 1, 2, 3, 4 -> ค่าที่แสดงคือ 1, 2, 3, 4, 5
        row += (j + 1).toString();
    }
    console.log(row);
}