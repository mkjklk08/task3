const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function gcd(a, b) {
    return b === 0n ? a : gcd(b, a % b);
}

function getLcm(xStr, yStr) {
    // Регулярное выражение проверяет, что в строке ТОЛЬКО цифры (натуральные числа)
    if (!xStr || !yStr || !/^\d+$/.test(xStr) || !/^\d+$/.test(yStr)) {
        return "NaN";
    }

    try {
        const x = BigInt(xStr);
        const y = BigInt(yStr);

        if (x <= 0n || y <= 0n) return "NaN";

        const result = (x * y) / gcd(x, y);
        return result.toString();
    } catch (e) {
        return "NaN";
    }
}

app.get('/mkjklk970901_gmail_com', (req, res) => {
    const { x, y } = req.query;
    const result = getLcm(x, y);
    
    // Это гарантирует, что бот получит "чистый текст"
    res.setHeader('Content-Type', 'text/plain');
    res.send(result); 
});

app.listen(PORT);
