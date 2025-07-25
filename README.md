# Guess The Name - Mobile Games

Two engaging guessing games with picture hints and tile-based letter picking mechanics!

## 🎮 Games Included

### 🎬 Movie Stars Game
- Guess famous actors and actresses from their photos
- Multiple themed levels: Action Heroes, Comedy Legends, Classic Hollywood, Modern Icons
- Regular levels with mixed categories
- 15-20 stars per level with increasing difficulty

### ⚽ Soccer Teams Game  
- Identify world-famous football clubs from their logos
- League-themed levels: Premier League, La Liga, Serie A, Bundesliga
- Regular levels with top teams from around the world
- 15-20 teams per level with progressive difficulty

## 🎯 Game Features

### Core Mechanics
- **Picture Hints**: Use photos/logos as visual clues
- **Free Choice**: Answer any unsolved person/team in the level
- **Tile-Based Spelling**: Pick letters to spell out the correct name
- **Coin System**: Earn coins for correct answers (10+ per answer based on difficulty)

### Hint System
- **Reveal Letter** (15 coins): Shows a random correct letter
- **Remove Wrong Letters** (20 coins): Removes incorrect letters from the pool
- **Show Answer** (50 coins): Reveals the complete answer

### Level Types
- **Regular Levels**: Mixed categories with various difficulty levels
- **Themed Levels**: Specific categories (Action Stars, Premier League, etc.)
- **Progressive Unlocking**: Use coins to unlock new levels (50 coins each)

## 🚀 Setup Instructions

### Development Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

### Android Development
This project is configured with Capacitor for native Android development:

1. **Build the web app**:
   ```bash
   npm run build
   ```

2. **Add Android platform**:
   ```bash
   npx cap add android
   ```

3. **Sync with native project**:
   ```bash
   npx cap sync android
   ```

4. **Open in Android Studio**:
   ```bash
   npx cap open android
   ```

### Android Requirements
- Android Studio installed
- Android SDK (API level 22+)
- Java Development Kit (JDK 11+)

## 📱 Mobile Optimizations

- **Responsive Design**: Optimized for mobile screens and tablets
- **Touch-Friendly**: Large tap targets and smooth animations
- **Dark Theme**: Eye-friendly dark color scheme with vibrant accents
- **Offline Ready**: All game data stored locally
- **Progress Saving**: Automatic save using localStorage

## 🎨 Design System

### Movie Stars Theme
- **Primary Colors**: Red gradients with gold accents
- **Background**: Dark red to black gradients
- **Icons**: Film and star icons

### Soccer Teams Theme  
- **Primary Colors**: Green and blue gradients
- **Background**: Green to blue to black gradients
- **Icons**: Trophy and shield icons

## 🏗️ Project Structure

```
src/
├── components/
│   ├── GameSelection.tsx      # Main game selection screen
│   ├── LevelSelect.tsx        # Level selection for both games
│   ├── GameScreen.tsx         # Movie stars gameplay
│   ├── SoccerGameScreen.tsx   # Soccer teams gameplay
│   └── LetterTile.tsx         # Reusable letter tile component
├── data/
│   └── gameData.ts           # Game data for both apps
└── App.tsx                   # Main app component with routing
```

## 🎲 Game Data Structure

Each game includes:
- **4+ Levels** with 15-20 items each
- **Difficulty Ratings** (1-3 stars)
- **Category/League Information**
- **High-Quality Images** (photos for stars, logos for teams)
- **Progressive Unlocking System**

## 🔧 Customization

### Adding New Levels
1. Edit `src/data/gameData.ts`
2. Add new level objects with stars/teams data
3. Include proper image URLs and difficulty ratings

### Styling Changes
- Modify Tailwind classes in components
- Update `tailwind.config.ts` for custom animations
- Adjust color themes in individual components

## 📦 Build for Production

### Web Build
```bash
npm run build
```

### Android APK
1. Follow Android setup steps above
2. In Android Studio: Build → Generate Signed Bundle/APK
3. Choose APK and follow signing instructions

## 🎯 Ready for Play Store

The app is designed with Play Store guidelines in mind:
- **Appropriate Content**: Family-friendly themes
- **Engaging Gameplay**: Addictive tile-based mechanics
- **Monetization Ready**: Coin system for in-app purchases
- **Professional UI**: Polished design with smooth animations

## 🚀 Features for Enhanced Versions

- **More Categories**: Add sports players, musicians, brands, etc.
- **Multiplayer Mode**: Challenge friends online
- **Daily Challenges**: Special levels with bonus rewards
- **Achievement System**: Unlock badges and rewards
- **Sound Effects**: Audio feedback for actions
- **Difficulty Settings**: Adjustable game difficulty

---

**Ready to play!** 🎮 Start with the Movie Stars game or test your football knowledge with Soccer Teams!