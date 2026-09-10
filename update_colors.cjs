const fs = require('fs');
const path = require('path');

const directory = './src';

const replacements = {
  'bg-[#0a0a0a]/90': 'bg-bg-nav',
  'bg-[#0a0a0a]': 'bg-bg-base',
  'bg-white/\\[0.02\\]': 'bg-bg-card',
  'bg-white/\\[0.03\\]': 'bg-bg-card',
  'bg-white/\\[0.08\\]': 'bg-bg-card-hover',
  'bg-white/5': 'bg-bg-card',
  'hover:bg-white/5': 'hover:bg-bg-card-hover',
  'text-white': 'text-text-primary',
  'text-slate-200': 'text-text-primary',
  'text-slate-300': 'text-text-secondary',
  'text-slate-400': 'text-text-secondary',
  'text-slate-500': 'text-text-muted',
  'border-white/5': 'border-border-subtle',
  'border-white/10': 'border-border-subtle',
  'bg-black': 'bg-text-primary',
  'text-black': 'text-bg-base',
  'hover:bg-slate-200': 'hover:bg-text-secondary',
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  for (const [key, value] of Object.entries(replacements)) {
    const regex = new RegExp(key, 'g');
    content = content.replace(regex, value);
  }
  
  // Custom manual fixes
  content = content.replace(/bg-white text-bg-base/g, 'bg-text-primary text-bg-base');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      processFile(filePath);
    }
  }
}

walk(directory);
