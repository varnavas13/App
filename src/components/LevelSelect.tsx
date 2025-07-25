import React from 'react';
import { ArrowLeft, Coins, Star, Lock, Trophy, Film } from 'lucide-react';
import { GameLevel, SoccerLevel } from '../data/gameData';

interface LevelSelectProps {
  levels: (GameLevel | SoccerLevel)[];
  coins: number;
  onSelectLevel: (level: GameLevel | SoccerLevel) => void;
  onBack: () => void;
  onCoinsChange: (coins: number) => void;
  onUnlockLevel: (levelId: string) => void;
  gameTitle: string;
}

const LevelSelect: React.FC<LevelSelectProps> = ({
  levels,
  coins,
  onSelectLevel,
  onBack,
  onCoinsChange,
  onUnlockLevel,
  gameTitle,
}) => {
  const handleUnlockLevel = (level: GameLevel | SoccerLevel) => {
    const unlockCost = 50;
    if (coins >= unlockCost) {
      onCoinsChange(coins - unlockCost);
      onUnlockLevel(level.id);
    }
  };

  const getProgressText = (level: GameLevel | SoccerLevel) => {
    if ('stars' in level) {
      // Movie stars level
      const solvedCount = level.stars.filter(star => star.solved).length;
      return `${solvedCount}/${level.stars.length}`;
    } else {
      // Soccer teams level
      const solvedCount = level.teams.filter(team => team.solved).length;
      return `${solvedCount}/${level.teams.length}`;
    }
  };

  const getIcon = () => {
    return gameTitle === 'Movie Stars' ? <Film size={24} /> : <Trophy size={24} />;
  };

  const getThemeColor = () => {
    return gameTitle === 'Movie Stars' 
      ? 'from-red-900 via-red-800 to-black' 
      : 'from-green-900 via-blue-900 to-black';
  };

  const getAccentColor = () => {
    return gameTitle === 'Movie Stars' ? 'red' : 'green';
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getThemeColor()} text-white`}>
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className={`flex items-center gap-2 text-${getAccentColor()}-300 hover:text-white transition-colors`}
          >
            <ArrowLeft size={24} />
            <span>Back to Games</span>
          </button>
          
          <div className="flex items-center gap-2 bg-yellow-600 px-4 py-2 rounded-full">
            <Coins size={20} />
            <span className="font-bold">{coins}</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            {getIcon()}
            <h1 className="text-4xl font-bold">{gameTitle}</h1>
          </div>
          <p className="text-gray-300 text-lg">
            Choose a level to start guessing!
          </p>
        </div>

        {/* Levels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {levels.map((level, index) => {
            const isUnlocked = level.unlocked;
            const progress = getProgressText(level);
            const isCompleted = level.completed;
            
            return (
              <div
                key={level.id}
                className={`relative bg-gray-800 rounded-xl p-6 transition-all duration-300 ${
                  isUnlocked
                    ? `cursor-pointer hover:scale-105 hover:bg-gray-700 border-2 border-${getAccentColor()}-600 hover:border-${getAccentColor()}-400`
                    : 'opacity-60 border-2 border-gray-600'
                }`}
                onClick={() => isUnlocked && onSelectLevel(level)}
              >
                {/* Level Number */}
                <div className={`absolute -top-3 -left-3 w-8 h-8 bg-${getAccentColor()}-600 rounded-full flex items-center justify-center font-bold text-sm`}>
                  {index + 1}
                </div>

                {/* Lock Icon */}
                {!isUnlocked && (
                  <div className="absolute top-4 right-4">
                    <Lock size={24} className="text-gray-400" />
                  </div>
                )}

                {/* Completed Badge */}
                {isCompleted && (
                  <div className="absolute top-4 right-4 bg-green-500 rounded-full p-1">
                    <Star size={20} className="text-white fill-current" />
                  </div>
                )}

                {/* Level Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{level.title}</h3>
                  
                  {level.type === 'themed' && (
                    <p className={`text-${getAccentColor()}-300 text-sm mb-3`}>
                      Theme: {level.theme}
                    </p>
                  )}

                  <div className="mb-4">
                    <p className="text-gray-300 text-sm mb-1">Progress</p>
                    <p className="font-bold text-lg">{progress}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-300 text-sm mb-1">Reward</p>
                    <div className="flex items-center justify-center gap-1">
                      <Coins size={16} className="text-yellow-500" />
                      <span className="font-bold text-yellow-500">{level.coinsReward}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  {isUnlocked ? (
                    <button className={`w-full bg-${getAccentColor()}-600 hover:bg-${getAccentColor()}-700 py-2 px-4 rounded-lg font-bold transition-colors`}>
                      {isCompleted ? 'Replay Level' : 'Play Level'}
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUnlockLevel(level);
                      }}
                      disabled={coins < 50}
                      className="w-full bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 disabled:opacity-50 py-2 px-4 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
                    >
                      <Coins size={16} />
                      <span>Unlock (50 coins)</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Instructions */}
        <div className="text-center mt-12 text-gray-300">
          <p className="text-lg mb-2">How to Play:</p>
          <div className="space-y-2 text-sm max-w-2xl mx-auto">
            <p>• Tap any unlocked level to start playing</p>
            <p>• Choose any unsolved {gameTitle === 'Movie Stars' ? 'star' : 'team'} in the level</p>
            <p>• Use picture hints to spell out the correct name</p>
            <p>• Earn coins for each correct answer</p>
            <p>• Use coins to unlock new levels or buy hints</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelSelect;