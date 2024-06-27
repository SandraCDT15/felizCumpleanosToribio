document.getElementById('celebrateButton').addEventListener('click', function() {
    for (let i = 0; i < 25; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.backgroundColor = getRandomColor();
        document.getElementById('balloons').appendChild(balloon);
    }
});

function getRandomColor() {
    const colors = ['#FF0000', '#4169E1', '#008000', '#FFFF00', '#1E90FF'];
    return colors[Math.floor(Math.random() * colors.length)];
}