# Troubleshooting Internal Server Error

If you're seeing an internal server error, try these steps:

## 1. Clear Next.js Cache
```bash
rm -rf .next
# or on Windows:
Remove-Item -Recurse -Force .next
```

## 2. Reinstall Dependencies
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

## 3. Check for Missing Dependencies
Make sure all required packages are installed:
- next
- react
- react-dom
- All @radix-ui packages
- lucide-react

## 4. Verify File Structure
Ensure these files exist:
- `app/layout.tsx`
- `app/page.tsx`
- `app/client-layout.tsx`
- `app/globals.css`

## 5. Check Browser Console
Look for specific error messages in:
- Browser DevTools Console (F12)
- Terminal where `npm run dev` is running

## 6. Common Issues Fixed
- ✅ Removed unused imports (Link, Image from OnboardingSection)
- ✅ Added metadata to layout.tsx
- ✅ Simplified client-layout.tsx (removed OnboardAI dependencies)
- ✅ Removed ElevenLabs CSS and API rewrites

## 7. Restart Dev Server
```bash
# Stop the server (Ctrl+C)
npm run dev
```

If the error persists, check the terminal output for the specific error message.

