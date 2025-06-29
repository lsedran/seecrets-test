import { allWords } from '../data/wordList.js';

/**
 * Cache for previously checked words to avoid repeated API calls
 * @type {Map<string, boolean>}
 */
const wordCache = new Map();

/**
 * Check if a word exists in the English dictionary using local word list first, then Dictionary API as fallback
 * @param {string} word - The word to check
 * @returns {Promise<boolean>} - True if the word exists, false otherwise
 */
export async function isValidWord(word) {
  if (!word) return false;
  
  // Convert to lowercase and trim
  const normalizedWord = word.toLowerCase().trim();
  
  // Check cache first
  if (wordCache.has(normalizedWord)) {
    return wordCache.get(normalizedWord);
  }
  
  // Check local word list first (faster and more reliable)
  const isInLocalList = allWords.has(normalizedWord.toUpperCase());
  if (isInLocalList) {
    wordCache.set(normalizedWord, true);
    return true;
  }
  
  // If not in local list, try the Dictionary API as fallback
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${normalizedWord}`);
    const isValid = response.ok;
    
    // Cache the result
    wordCache.set(normalizedWord, isValid);
    
    return isValid;
  } catch (error) {
    console.error('Error checking word:', error);
    // If API fails, default to false to be safe
    wordCache.set(normalizedWord, false);
    return false;
  }
}

/**
 * Get suggestions for similar valid words
 * Note: This is a placeholder as the free Dictionary API doesn't support fuzzy matching
 * @param {string} word - The invalid word
 * @returns {Promise<string[]>} - Array of similar valid words (empty for now)
 */
export async function getSuggestions(word) {
  // The free API doesn't support fuzzy matching or suggestions
  // We could implement a basic Levenshtein distance algorithm here
  // or integrate with a different API that supports suggestions
  return [];
} 