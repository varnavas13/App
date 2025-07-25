import React, { useState, useEffect } from 'react';
import GameSelection from './components/GameSelection';
import LevelSelect from './components/LevelSelect';
import GameScreen from './components/GameScreen';
import SoccerGameScreen from './components/SoccerGameScreen';
import { movieStarsData, soccerTeamsData, GameLevel, SoccerLevel } from './data/gameData';

type GameType = 'selection' | 'movie-stars' | 'soccer-teams';
type Screen = 'game-selection' | 'level-select' | 'game';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('game-selection');
  const [currentGameType, setCurrentGameType] = useState<GameType>('selection');
  const [selectedLevel, setSelectedLevel] = useState<GameLevel | SoccerLevel | null>(null);
  const [coins, setCoins] = useState(100);
  const [movieLevels, setMovieLevels] = useState(movieStarsData);
  const [soccerLevels, setSoccerLevels] = useState(soccerTeamsData);

  // Load saved progress
  useEffect(() => {
    const savedCoins = localStorage.getItem('guessTheNameCoins');
    const savedMovieProgress = localStorage.getItem('movieStarsProgress');
    const savedSoccerProgress = localStorage.getItem('soccerTeamsProgress');
    
    if (savedCoins) {
      setCoins(parseInt(savedCoins));
    }
    
    if (savedMovieProgress) {
      const progress = JSON.parse(savedMovieProgress);
      setMovieLevels(progress);
    }
    
    if (savedSoccerProgress) {
      const progress = JSON.parse(savedSoccerProgress);
      setSoccerLevels(progress);
    }
  }, []);

  // Save progress
  useEffect(() => {
    localStorage.setItem('guessTheNameCoins', coins.toString());
    localStorage.setItem('movieStarsProgress', JSON.stringify(movieLevels));
    localStorage.setItem('soccerTeamsProgress', JSON.stringify(soccerLevels));
  }, [coins, movieLevels, soccerLevels]);

  const handleSelectMovieStars = () => {
    setCurrentGameType('movie-stars');
    setCurrentScreen('level-select');
  };

  const handleSelectSoccerTeams = () => {
    setCurrentGameType('soccer-teams');
    setCurrentScreen('level-select');
  };

  const handleSelectLevel = (level: GameLevel | SoccerLevel) => {
    setSelectedLevel(level);
    setCurrentScreen('game');
  };

  const handleBackToLevelSelect = () => {
    setSelectedLevel(null);
    setCurrentScreen('level-select');
  };

  const handleBackToGameSelection = () => {
    setCurrentGameType('selection');
    setCurrentScreen('game-selection');
  };

  const handleMovieStarSolved = (levelId: string, starId: string) => {
    setMovieLevels(prevLevels => 
      prevLevels.map(level => {
        if (level.id === levelId) {
          const updatedStars = level.stars.map(star => 
            star.id === starId ? { ...star, solved: true } : star
          );
          const allSolved = updatedStars.every(star => star.solved);
          return {
            ...level,
            stars: updatedStars,
            completed: allSolved
          };
        }
        return level;
      })
    );
  };

  const handleSoccerTeamSolved = (levelId: string, teamId: string) => {
    setSoccerLevels(prevLevels => 
      prevLevels.map(level => {
        if (level.id === levelId) {
          const updatedTeams = level.teams.map(team => 
            team.id === teamId ? { ...team, solved: true } : team
          );
          const allSolved = updatedTeams.every(team => team.solved);
          return {
            ...level,
            teams: updatedTeams,
            completed: allSolved
          };
        }
        return level;
      })
    );
  };

  const handleUnlockLevel = (levelId: string) => {
    if (currentGameType === 'movie-stars') {
      setMovieLevels(prevLevels => 
        prevLevels.map(level => 
          level.id === levelId ? { ...level, unlocked: true } : level
        )
      );
    } else if (currentGameType === 'soccer-teams') {
      setSoccerLevels(prevLevels => 
        prevLevels.map(level => 
          level.id === levelId ? { ...level, unlocked: true } : level
        )
      );
    }
  };

  if (currentScreen === 'game-selection') {
    return (
      <GameSelection
        onSelectMovieStars={handleSelectMovieStars}
        onSelectSoccerTeams={handleSelectSoccerTeams}
      />
    );
  }

  if (currentScreen === 'level-select') {
    const levels = currentGameType === 'movie-stars' ? movieLevels : soccerLevels;
    const gameTitle = currentGameType === 'movie-stars' ? 'Movie Stars' : 'Soccer Teams';
    
    return (
      <LevelSelect
        levels={levels}
        coins={coins}
        onSelectLevel={handleSelectLevel}
        onBack={handleBackToGameSelection}
        onCoinsChange={setCoins}
        onUnlockLevel={handleUnlockLevel}
        gameTitle={gameTitle}
      />
    );
  }

  if (currentScreen === 'game' && selectedLevel) {
    if (currentGameType === 'movie-stars') {
      return (
        <GameScreen
          level={selectedLevel as GameLevel}
          coins={coins}
          onBack={handleBackToLevelSelect}
          onCoinsChange={setCoins}
          onStarSolved={handleMovieStarSolved}
        />
      );
    } else if (currentGameType === 'soccer-teams') {
      return (
        <SoccerGameScreen
          level={selectedLevel as SoccerLevel}
          coins={coins}
          onBack={handleBackToLevelSelect}
          onCoinsChange={setCoins}
          onTeamSolved={handleSoccerTeamSolved}
        />
      );
    }
  }

  return <div>Loading...</div>;
}

export default App;