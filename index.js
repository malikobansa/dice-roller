function rollDice() {
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const values = [];
    let images = ''; // Initialize images as an empty string

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        switch (value) {
            case 1:
                images += '⚀ '; // Die face 1
                break;
            case 2:
                images += '⚁ '; // Die face 2
                break;
            case 3:
                images += '⚂ '; // Die face 3
                break;
            case 4:
                images += '⚃ '; // Die face 4
                break;
            case 5:
                images += '⚄ '; // Die face 5
                break;
            case 6:
                images += '⚅ '; // Die face 6
                break;
        }
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images; // Set the innerHTML of diceImages to the images string
}
