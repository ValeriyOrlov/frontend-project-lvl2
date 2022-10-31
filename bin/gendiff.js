#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/genDiff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference')
  .version('0.1.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output type', 'stylish')
  .action((filepath1, filepath2) => genDiff(filepath1, filepath2, program.opts().format))
  .parse();
