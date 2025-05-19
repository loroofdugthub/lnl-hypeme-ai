
const compliments = [
    "You're a masterpiece in motion!",
    "Damn, you’re hotter than the sun!",
    "You don’t just slay—YOU ERASE!",
    "Every room you enter turns electric.",
    "You make the moon feel shy.",
    "Confidence? You're the blueprint.",
    "You're too fine for this planet!"
];

function generateCompliment() {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    document.getElementById('compliment').textContent = compliment;
}
