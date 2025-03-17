const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Define source and target directories
const sourceDir = path.join(__dirname, '../public/sources');
const targetDir = path.join(__dirname, '../public/optimized');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Get all files from the source directory
const files = fs.readdirSync(sourceDir);

// Process each file
async function processImages() {
  console.log('Starting image optimization...');
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    // Only process image files
    if (!/\.(png|jpg|jpeg|gif)$/i.test(file)) {
      continue;
    }
    
    const sourcePath = path.join(sourceDir, file);
    const fileName = path.parse(file).name;
    const targetPath = path.join(targetDir, `${fileName}.webp`);
    
    try {
      console.log(`Processing: ${file}`);
      
      // Get image metadata to maintain aspect ratio
      const metadata = await sharp(sourcePath).metadata();
      
      // Convert and optimize the image
      await sharp(sourcePath)
        .resize({
          width: Math.min(metadata.width, 1920), // Cap max width at 1920px
          height: Math.min(metadata.height, 1920), // Cap max height as well
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: 80 }) // Convert to WebP with 80% quality
        .toFile(targetPath);
      
      // Calculate size reduction
      const originalSize = fs.statSync(sourcePath).size;
      const optimizedSize = fs.statSync(targetPath).size;
      const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
      
      console.log(`✅ ${file} → ${fileName}.webp (${reduction}% smaller)`);
      successCount++;
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
      errorCount++;
    }
  }
  
  console.log('\nOptimization complete!');
  console.log(`Successfully optimized: ${successCount} images`);
  console.log(`Failed: ${errorCount} images`);
  console.log(`\nOptimized images are saved in: ${targetDir}`);
}

processImages();