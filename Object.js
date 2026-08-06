const karakter = {
    nama: "Lemon The Destroyer",
    level: 100,
    hp: 2000,
    senjata: "Pedang"
};
//output
console.log(karakter);
//dot notation = karakter.nama, karakter.level, karakter.hp, karakter.senjata
//template literal = "\nName: " + karakter.nama + "\nlevel: " + karakter.level + "\nhp: " + karakter.hp + "\nsenjata: " + karakter.senjata
console.log("Name: " + karakter.nama + "\nlevel: " + karakter.level + "\nhp: " + karakter.hp + "\nsenjata: " + karakter.senjata);
//bracket notation
console.log(karakter ["hp"])
console.log(karakter ["level"])