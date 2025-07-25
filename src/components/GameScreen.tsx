import React, { useState, useEffect } from 'react';
import { ArrowLeft, Coins, Star, Eye, X, Lightbulb } from 'lucide-react';
import { GameLevel, GameStar } from '../data/gameData';
import LetterTile from './LetterTile';

interface GameScreenProps {
  level: GameLevel;
  coins: number;
  onBack: () => void;
  onCoinsChange: (coins: number) => void;
  onStarSolved: (levelId: string, starId: string) => void;
}

const GameScreen: React.FC<GameScreenProps> = ({
  level,
  coins,
  onBack,
  onCoinsChange,
  onStarSolved,
}) => {
  const [selectedStar, setSelectedStar] = useState<GameStar | null>(null);
  const [currentAnswer, setCurrentAnswer] = useState<string[]>([]);
  const [availableLetters, setAvailableLetters] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [hintType, setHintType] = useState<'reveal' | 'remove' | 'answer' | null>(null);

  // Get unsolved stars for selection
  const unsolvedStars = level.stars.filter(star => !star.solved);
  const solvedCount = level.stars.filter(star => star.solved).length;

  useEffect(() => {
    if (selectedStar) {
      setupNewStar(selectedStar);
    }
  }, [selectedStar]);

  const setupNewStar = (star: GameStar) => {
    const name = star.name;
    const nameLetters = name.split('');
    
    // Create extra letters to make it challenging
    const extraLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
      .filter(letter => !nameLetters.includes(letter))
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.max(6, Math.floor(nameLetters.length * 0.7)));
    
    const allLetters = [...nameLetters, ...extraLetters].sort(() => Math.random() - 0.5);
    
    setCurrentAnswer(new Array(nameLetters.length).fill(''));
    setAvailableLetters(allLetters);
    setShowHint(false);
    setHintType(null);
  };

  const selectStar = (star: GameStar) => {
    if (star.solved) return;
    setSelectedStar(star);
  };

  const handleLetterClick = (letter: string, index: number) => {
    if (!selectedStar) return;

    // Remove letter from available and add to answer
    const newAvailable = [...availableLetters];
    newAvailable.splice(index, 1);
    setAvailableLetters(newAvailable);

    // Find first empty spot in answer
    const emptyIndex = currentAnswer.findIndex(l => l === '');
    if (emptyIndex !== -1) {
      const newAnswer = [...currentAnswer];
      newAnswer[emptyIndex] = letter;
      setCurrentAnswer(newAnswer);
    }
  };

  const handleAnswerClick = (index: number) => {
    if (!selectedStar) return;

    const letter = currentAnswer[index];
    if (letter) {
      // Remove from answer and add back to available
      const newAnswer = [...currentAnswer];
      newAnswer[index] = '';
      setCurrentAnswer(newAnswer);
      setAvailableLetters([...availableLetters, letter]);
    }
  };

  const checkAnswer = () => {
    if (!selectedStar) return;

    const answer = currentAnswer.join('');
    if (answer === selectedStar.name) {
      // Correct answer!
      const coinsEarned = 10 + (selectedStar.difficulty * 5);
      onCoinsChange(coins + coinsEarned);
      onStarSolved(level.id, selectedStar.id);
      
      // Reset for next star
      setSelectedStar(null);
      setCurrentAnswer([]);
      setAvailableLetters([]);
    }
  };

  const useHint = (type: 'reveal' | 'remove' | 'answer') => {
    if (!selectedStar) return;

    const costs = { reveal: 15, remove: 20, answer: 50 };
    if (coins < costs[type]) return;

    onCoinsChange(coins - costs[type]);
    setHintType(type);

    if (type === 'reveal') {
      // Reveal a random correct letter
      const correctName = selectedStar.name;
      const emptyIndices = currentAnswer
        .map((letter, index) => letter === '' ? index : -1)
        .filter(index => index !== -1);
      
      if (emptyIndices.length > 0) {
        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        const correctLetter = correctName[randomIndex];
        
        const newAnswer = [...currentAnswer];
        newAnswer[randomIndex] = correctLetter;
        setCurrentAnswer(newAnswer);
        
        // Remove from available letters
        const letterIndex = availableLetters.indexOf(correctLetter);
        if (letterIndex !== -1) {
          const newAvailable = [...availableLetters];
          newAvailable.splice(letterIndex, 1);
          setAvailableLetters(newAvailable);
        }
      }
    } else if (type === 'remove') {
      // Remove wrong letters
      const correctLetters = selectedStar.name.split('');
      const wrongLetters = availableLetters.filter(letter => !correctLetters.includes(letter));
      const lettersToRemove = wrongLetters.slice(0, Math.ceil(wrongLetters.length / 2));
      
      setAvailableLetters(availableLetters.filter(letter => !lettersToRemove.includes(letter)));
    } else if (type === 'answer') {
      // Show full answer
      setCurrentAnswer(selectedStar.name.split(''));
      setAvailableLetters([]);
    }
  };

  const isAnswerComplete = currentAnswer.every(letter => letter !== '');

  if (!selectedStar) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
        <div className="container mx-auto px-4 py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-red-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={24} />
              <span>Back</span>
            </button>
            
            <div className="flex items-center gap-2 bg-yellow-600 px-4 py-2 rounded-full">
              <Coins size={20} />
              <span className="font-bold">{coins}</span>
            </div>
          </div>

          {/* Level Info */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{level.title}</h1>
            {level.type === 'themed' && (
              <p className="text-red-300 text-lg">Theme: {level.theme}</p>
            )}
            <p className="text-gray-300 mt-2">
              Progress: {solvedCount}/{level.stars.length} completed
            </p>
          </div>

          {/* Stars Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {level.stars.map((star) => (
              <div
                key={star.id}
                onClick={() => selectStar(star)}
                className={`relative bg-gray-800 rounded-lg p-4 cursor-pointer transition-all hover:scale-105 ${
                  star.solved 
                    ? 'opacity-50 bg-green-800' 
                    : 'hover:bg-gray-700 border-2 border-transparent hover:border-red-500'
                }`}
              >
                {/* Star Image */}
                <div className="aspect-square mb-3 rounded-lg overflow-hidden bg-gray-700">
                  <img
                    src={star.imageUrl}
                    alt="Mystery Star"
                    className={`w-full h-full object-cover ${
                      star.solved ? 'filter-none' : 'filter blur-sm'
                    }`}
                  />
                </div>
                
                {/* Star Info */}
                <div className="text-center">
                  {star.solved ? (
                    <p className="text-green-300 font-bold text-sm">{star.name}</p>
                  ) : (
                    <p className="text-gray-300 text-sm">Mystery Star</p>
                  )}
                  
                  <div className="flex justify-center mt-2">
                    {[...Array(star.difficulty)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>

                {star.solved && (
                  <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
                    <Star size={16} className="text-white fill-current" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="text-center text-gray-300">
            <p>Tap any unsolved star to start guessing!</p>
            <p className="text-sm mt-2">Use the picture as a hint to spell out the star's name</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setSelectedStar(null)}
            className="flex items-center gap-2 text-red-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={24} />
            <span>Back to Stars</span>
          </button>
          
          <div className="flex items-center gap-2 bg-yellow-600 px-4 py-2 rounded-full">
            <Coins size={20} />
            <span className="font-bold">{coins}</span>
          </div>
        </div>

        {/* Current Star */}
        <div className="text-center mb-8">
          <div className="w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden bg-gray-800">
            <img
              src={selectedStar.imageUrl}
              alt="Star Hint"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex justify-center mb-2">
            {[...Array(selectedStar.difficulty)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-500 fill-current" />
            ))}
          </div>
          
          <p className="text-gray-300">Category: {selectedStar.category}</p>
        </div>

        {/* Answer Slots */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-center mb-4">Spell the name:</h3>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {currentAnswer.map((letter, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className="w-12 h-12 bg-gray-700 border-2 border-gray-600 rounded-lg flex items-center justify-center text-xl font-bold hover:bg-gray-600 transition-colors"
              >
                {letter}
              </button>
            ))}
          </div>
          
          {isAnswerComplete && (
            <div className="text-center">
              <button
                onClick={checkAnswer}
                className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-bold text-lg transition-colors"
              >
                Check Answer
              </button>
            </div>
          )}
        </div>

        {/* Available Letters */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-center mb-4">Available Letters:</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {availableLetters.map((letter, index) => (
              <LetterTile
                key={`${letter}-${index}`}
                letter={letter}
                onClick={() => handleLetterClick(letter, index)}
                disabled={false}
              />
            ))}
          </div>
        </div>

        {/* Hints */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => useHint('reveal')}
            disabled={coins < 15}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:opacity-50 px-4 py-2 rounded-lg transition-colors"
          >
            <Eye size={16} />
            <span>Reveal Letter (15 coins)</span>
          </button>
          
          <button
            onClick={() => useHint('remove')}
            disabled={coins < 20}
            className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 disabled:opacity-50 px-4 py-2 rounded-lg transition-colors"
          >
            <X size={16} />
            <span>Remove Wrong (20 coins)</span>
          </button>
          
          <button
            onClick={() => useHint('answer')}
            disabled={coins < 50}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:opacity-50 px-4 py-2 rounded-lg transition-colors"
          >
            <Lightbulb size={16} />
            <span>Show Answer (50 coins)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;