<!-- Triggering GitHub Pages deploy workflow --> 

# Seecret - Image Guessing Game

A daily image guessing game where players try to identify a blurred image through word guesses.

## Recent Fixes (June 2025)

### 1. Word Validation Improvements
- **Issue**: Common words like "net" were not being accepted
- **Fix**: Updated word validation to use a comprehensive local word list as the primary validation method, with the Dictionary API as a fallback
- **Files**: `src/utils/wordValidator.js`, `src/data/wordList.js`
- **Result**: More reliable word acceptance, faster validation, and better coverage of common words

### 2. Image Click Prevention
- **Issue**: Players could click on images to remove blur or interact with them
- **Fix**: Added `pointer-events: none` and click event prevention to image elements
- **Files**: `src/App.jsx`, `src/styles.css`
- **Result**: Images are now completely non-interactive during gameplay

### 3. Anti-Cheating Measures
- **Issue**: Players could right-click images and see descriptive filenames (e.g., "pizza.jpg")
- **Fix**: Renamed all image files to encoded names (e.g., "img_007.jpg") and updated the puzzle data
- **Files**: `src/data/dailyPuzzles.js`, `public/images/*`
- **Result**: Filenames no longer reveal the answer

### 4. Additional Security Features
- Disabled right-click context menu on images
- Prevented text selection on images
- Disabled drag and drop functionality
- Added comprehensive CSS to prevent all user interactions with images

## Development

### Image Management
To manage image files and prevent cheating:

```bash
# Rename images to encoded names (for production)
npm run rename-images

# Reverse to descriptive names (for development)
npm run reverse-images
```

### Running the Game
```bash
npm run dev
```

## Game Mechanics
- Players have 6 attempts to guess the hidden word
- Each guess must be a valid English word
- The image becomes clearer with each guess
- Correct letters are highlighted in green
- Incorrect letters are greyed out

## Technologies
- React
- Vite
- Canvas Confetti
- Dictionary API (fallback) 