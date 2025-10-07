# Portfolio Troubleshooting Guide

## Common Issues and Solutions

### 1. **Port Not Available Error**
If you see "Something is already running on port 3000":
```bash
# Kill the process on port 3000
npx kill-port 3000
# Or use task manager to end the process
```

### 2. **Dependencies Issues**
If you see module not found errors:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### 3. **Tailwind CSS Not Working**
If styles are not applying:
```bash
# Rebuild Tailwind
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
```

### 4. **React Scripts Issues**
If React Scripts fails:
```bash
# Update React Scripts
npm install react-scripts@latest
```

### 5. **Browser Console Errors**
Check browser console (F12) for specific errors:
- Import/export errors
- Missing dependencies
- Syntax errors

## Quick Fix Commands

```bash
# Complete reset
rm -rf node_modules package-lock.json
npm install
npm start
```

## Alternative: Use the Simple Version

If the full version has issues, use the simplified version:

1. The SimpleApp.js is already set up
2. It contains all your content
3. Uses basic Tailwind CSS
4. No complex animations or dependencies

## Browser Compatibility

Make sure you're using:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contact

If you continue to have issues, please share:
1. The exact error message
2. Browser console errors (F12)
3. Your operating system
4. Node.js version (`node --version`)
