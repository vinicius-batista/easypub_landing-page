echo "Generate Pages"
npm run generate

echo "Clean public"
rm -rf public/*

echo "Move files from dist to public"
cp -rf dist/* public

echo "Deploy to firebase"
firebase deploy
