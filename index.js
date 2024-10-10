let hero = "Bezoc"
let xp = 25540

if (xp <= 1000) {
    level = "Ferro"
}

else if (xp >= 1001 && xp <= 2000) {
    level = "Bronze"
}

else if (xp >= 2001 && xp <= 5000) {
    level = "Prata"
}

else if (xp >= 5001 && xp <= 6000) {
    level = "Ouro"
}

else if (xp >= 6001 && xp <= 8000) {
    level = "Platina Diamante"
}

else if (xp >= 8001 && xp <= 11000) {
    level = "Ascendente"
}

else if (xp >= 11001 && xp <= 20000) {
    level = "Imortal"
}

else if (xp >= 20.0001) {
    level = "Radiante"
}


console.log(`O herói ${hero} está no nível ${level}`);