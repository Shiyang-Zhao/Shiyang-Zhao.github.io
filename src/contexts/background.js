import React, { useEffect } from 'react';

const MatrixAnimation = () => {
    useEffect(() => {
        var canvas = document.querySelector('canvas'),
            ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
        letters = letters.split('');

        var fontSize = 10,
            columns = canvas.width / fontSize;

        var drops = [];
        for (var i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        function draw() {
            ctx.fillStyle = 'rgba(252, 252, 252, 0.15)'; // Increase opacity here
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (var i = 0; i < drops.length; i++) {
                var text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate random hex color
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                drops[i]++;

                if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                    drops[i] = 0;
                }
            }
        }


        var intervalId = setInterval(draw, 33);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <canvas className="matrixCanvas"></canvas>
    );
}

export default MatrixAnimation;
