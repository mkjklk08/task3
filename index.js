const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function getLcm(xStr, yStr) {
    if (!/^\d+$/.test(xStr) || !/^\d+$/.test(yStr)) {
      return "NaN";
    }

    const x = parseInt(xStr, 10);
    const y = parseInt(yStr, 10);

    if (x <= 0 || y <= 0) {
        return "NaN";
    }

    const res = Math.abs(x * y) / gcd(x, y);
    return res.toString();
}

app.get('/mkjklk970901_gmail_com', (req, res) => {
    const { x, y } = req.query;
    const result = getLcm(x, y);
    
    res.set('Content-Type', 'text/plain');
    res.send(result);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});