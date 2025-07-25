import React from 'react';
import { Star, Trophy, Film, Users } from 'lucide-react';

interface GameSelectionProps {
  onSelectMovieStars: () => void;
  onSelectSoccerTeams: () => void;
}

const GameSelection: React.FC<GameSelectionProps> = ({
  onSelectMovieStars,
  onSelectSoccerTeams,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            Guess The Name
          </h1>
          <p className="text-xl text-gray-300">
            Choose your guessing challenge!
          </p>
        </div>

        {/* Game Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Movie Stars Game */}
          <div
            onClick={onSelectMovieStars}
            className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-8 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-2 border-red-600 hover:border-red-400"
          >
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-red-600 rounded-full flex items-center justify-center">
                <Film size={48} className="text-white" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-red-100">
                Movie Stars
              </h2>
              
              <p className="text-red-200 mb-6 text-lg">
                Guess famous actors and actresses from their photos!
              </p>
              
              <div className="space-y-3 text-red-100">
                <div className="flex items-center justify-center gap-2">
                  <Star size={20} className="text-yellow-400" />
                  <span>Action Heroes</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Star size={20} className="text-yellow-400" />
                  <span>Comedy Legends</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Star size={20} className="text-yellow-400" />
                  <span>Classic Hollywood</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Star size={20} className="text-yellow-400" />
                  <span>Modern Icons</span>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-bold text-lg transition-colors">
                  Play Movie Stars
                </button>
              </div>
            </div>
          </div>

          {/* Soccer Teams Game */}
          <div
            onClick={onSelectSoccerTeams}
            className="bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-8 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-2 border-green-600 hover:border-green-400"
          >
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-green-600 rounded-full flex items-center justify-center">
                <Trophy size={48} className="text-white" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-green-100">
                Soccer Teams
              </h2>
              
              <p className="text-green-200 mb-6 text-lg">
                Identify world-famous football clubs from their logos!
              </p>
              
              <div className="space-y-3 text-green-100">
                <div className="flex items-center justify-center gap-2">
                  <Trophy size={20} className="text-yellow-400" />
                  <span>Premier League</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Trophy size={20} className="text-yellow-400" />
                  <span>La Liga</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Trophy size={20} className="text-yellow-400" />
                  <span>Serie A</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Trophy size={20} className="text-yellow-400" />
                  <span>World Famous</span>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-bold text-lg transition-colors">
                  Play Soccer Teams
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-200">Game Features</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6">
              <Users size={32} className="text-blue-400 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Free Choice</h4>
              <p className="text-gray-300 text-sm">Answer any person/team in the level - no fixed order!</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <Star size={32} className="text-yellow-400 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Picture Hints</h4>
              <p className="text-gray-300 text-sm">Use photos and logos as visual clues to guess the answer</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <Trophy size={32} className="text-green-400 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Themed Levels</h4>
              <p className="text-gray-300 text-sm">Regular and themed levels with increasing difficulty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSelection;