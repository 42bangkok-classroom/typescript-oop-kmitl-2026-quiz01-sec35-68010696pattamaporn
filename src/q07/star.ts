const input13 = +process.argv[2];

if (Number.isNaN(input13) || input13 < 0) {
    process.exit();
}

for (let i = 0; i < input13; i++) {
    let row = '';
    
    // 1. ลูปทำช่องว่างนำหน้า (สูตรกลับด้าน)
    // ถ้า input=5, บรรทัดแรก(i=0) จะมีว่าง 4, ต่อมา 3, 2, 1...
    for (let s = 0; s < i; s++) {
        row += ' ';
    }
    
    // 2. ลูปทำดาว (จำนวนเท่ากับ input เสมอ)
    for (let j = 0; j < input13; j++) {
        row += '*';
    }
    
    console.log(row);
}