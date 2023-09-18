import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './theme'

const MatrixAnimation = () => {
    const [{ themeName }] = useContext(ThemeContext);

    useEffect(() => {
        var canvas = document.querySelector('canvas'),
            ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var letters = 'CSE 110 - Principles of Programming with Java, CSE 205 - Object-Oriented Programming and Data Structures, CSE 230 - Computer Organization and Assembly Language Programming, CSE 240 - Introduction to Programming Languages, CSE 310 - Data Structures and Algorithms, CSE 340 - Principles of Programming Languages, CSE 355 - Introduction to Theoretical Computer Science, CSE 360 - Introduction to Software Engineering, CSE 365 - Introduction to Information Assurance and Security, CSE 412 - Introduction to Data Mining, CSE 425 - Introduction to Artificial Intelligence, CSE 430 - Introduction to Compiler Construction, CSE 435 - Introduction to Big Data Analytics, CSE 440 - Introduction to Human-Computer Interaction, CSE 445 - Introduction to Embedded Systems, CSE 460 - Embedded and Cyber-Physical Systems Programming, CSE 465 - Information Assurance and Security II, CSE 471 - Introduction to Artificial Intelligence, CSE 472 - Introduction to Machine Learning, CSE 473 - Introduction to Computer Vision';
        letters = letters.split('');

        var fontSize = 10,
            columns = canvas.width / fontSize;

        var drops = [];
        for (var i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
        }

        function draw() {
            ctx.fillStyle = themeName === 'light' ? 'rgba(252, 252, 252, 0.3)' : 'rgba(35, 40, 62, 0.3)'
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (var i = 0; i < drops.length; i++) {
                var text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                drops[i]++;

                if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                    drops[i] = 0;
                }
            }
        }

        var intervalId = setInterval(draw, 30);

        return () => clearInterval(intervalId);
    }, [themeName]);

    return (
        <canvas className='matrixCanvas' />
    );
}

export default MatrixAnimation;
