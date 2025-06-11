export const dailyPuzzles = [
  { image: "images/pawn.png", answer: "PAWN" },
  { image: "images/podium.jpg", answer: "PODIUM" },
  { image: "images/zipper.jpg", answer: "ZIPPER" },
  { image: "images/antlers.jpg", answer: "ANTLERS" },
  { image: "images/flamingo.jpg", answer: "FLAMINGO" },
  { image: "images/jupiter.jpg", answer: "JUPITER" },
  { image: "images/coral.jpg", answer: "CORAL" },
  { image: "images/pizza.jpg", answer: "PIZZA" },
  { image: "images/wick.jpg", answer: "WICK" },
  { image: "images/guitar.jpg", answer: "GUITAR" },
  { image: "images/abacus.jpg", answer: "ABACUS" },
  { image: "images/cactus.jpg", answer: "CACTUS" },
  { image: "images/printer.jpg", answer: "PRINTER" },
  { image: "images/scarab.jpg", answer: "SCARAB" }
]; 

const startDate = new Date(2025, 5, 9); // Months are 0-indexed: 5 = June
const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
console.log('DEBUG: Today is', today.toString()); 