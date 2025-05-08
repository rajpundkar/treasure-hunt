import React from 'react';
import TeamLogin from '@/components/TeamLogin';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-rru-red text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">RRU Treasure Hunt</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">Scan. Solve. Unlock the mystery.</p>
          <div className="max-w-3xl mx-auto">
            <p className="text-white/80 mb-4">
              Welcome to the Rashtriya Raksha University Treasure Hunt! 
              This adventure will test your problem-solving skills and knowledge of our campus.
            </p>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">How to Play</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-bold text-lg mb-3">Game Rules</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Each team will receive their first clue manually from the event organizers.</li>
                <li>Follow the clue to find a QR code at a specific location.</li>
                <li>Scan the QR code to access your team-specific page.</li>
                <li>Enter the validation code found next to the QR code.</li>
                <li>Solve the riddle to find the next location.</li>
                <li>The final treasure location will be revealed in Morse code after completing all clues!</li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-bold text-lg mb-3">Tips for Success</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Work together as a team - different perspectives help solve puzzles faster!</li>
                <li>Take notes along the way.</li>
                <li>Read each clue carefully - the answer might be hidden in plain sight.</li>
                <li>If you get stuck, look for hints or context clues in your surroundings.</li>
                <li>The validation codes are case-insensitive.</li>
                <li>Have fun and explore the campus!</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Ready to Begin?</h2>
            <TeamLogin />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-600">
        <p>crafted with ❤️ by Raj Pundkar</p>
      </footer>
    </div>
  );
};

export default Index;
