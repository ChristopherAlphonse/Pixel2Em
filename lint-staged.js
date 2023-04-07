module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --cache --fix',
    'react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests',
    () => 'tsc -p tsconfig.json --noEmit',
    'git add'
  ],
  '*.json': ['prettier --write', 'git add'],
  '*.css': ['stylelint --fix', 'git add'],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write']
};
