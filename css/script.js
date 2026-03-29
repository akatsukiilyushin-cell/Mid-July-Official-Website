.container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
}

body {
    background-color: black;
    color: red;
    font-family: 'Arial', sans-serif;
    animation: fadeIn 1s;
}

h1, h2, h3 {
    text-transform: uppercase;
    letter-spacing: 2px;
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Hover Effects */
a {
    color: red;
    text-decoration: none;
    transition: color 0.3s;
}
a:hover {
    color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
    body {
        font-size: 14px;
    }
    h1 {
        font-size: 24px;
    }
}

/* Horror themed styling */
h1, h2 {
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

p {
    line-height: 1.6;
}

.button {
    background-color: red;
    color: black;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: transform 0.3s;
}

.button:hover {
    transform: scale(1.1);
    background-color: black;
    color: red;
}