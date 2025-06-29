#!/usr/bin/env node

/**
 * Utility script to rename image files to encoded names
 * This prevents cheating by right-clicking and seeing descriptive filenames
 */

const fs = require('fs');
const path = require('path');

// Mapping of descriptive names to encoded names
const imageMapping = {
  'pawn.png': 'img_001.png',
  'podium.jpg': 'img_002.jpg',
  'zipper.jpg': 'img_003.jpg',
  'antlers.jpg': 'img_004.jpg',
  'flamingo.jpg': 'img_005.jpg',
  'coral.jpg': 'img_006.jpg',
  'pizza.jpg': 'img_007.jpg',
  'wick.jpg': 'img_008.jpg',
  'guitar.jpg': 'img_009.jpg',
  'abacus.jpg': 'img_010.jpg',
  'cactus.jpg': 'img_011.jpg',
  'printer.jpg': 'img_012.jpg',
  'scarab.jpg': 'img_013.jpg',
  'Shell.jpg': 'img_014.jpg',
  'Moth.jpg': 'img_015.jpg',
  'Drums.jpg': 'img_016.jpg',
  'VHS.jpg': 'img_017.jpg'
};

const imagesDir = path.join(__dirname, '../public/images');

function renameImages() {
  console.log('Renaming images to prevent cheating...');
  
  Object.entries(imageMapping).forEach(([oldName, newName]) => {
    const oldPath = path.join(imagesDir, oldName);
    const newPath = path.join(imagesDir, newName);
    
    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`✓ Renamed ${oldName} → ${newName}`);
    } else {
      console.log(`⚠ File not found: ${oldName}`);
    }
  });
  
  console.log('Image renaming complete!');
}

function reverseRename() {
  console.log('Reversing image names back to descriptive names...');
  
  Object.entries(imageMapping).forEach(([oldName, newName]) => {
    const oldPath = path.join(imagesDir, newName);
    const newPath = path.join(imagesDir, oldName);
    
    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`✓ Renamed ${newName} → ${oldName}`);
    } else {
      console.log(`⚠ File not found: ${newName}`);
    }
  });
  
  console.log('Image name reversal complete!');
}

// Check command line arguments
const command = process.argv[2];

if (command === 'reverse') {
  reverseRename();
} else {
  renameImages();
} 