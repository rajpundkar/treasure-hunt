import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';

const FinalClue = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();
  
  React.useEffect(() => {
    // Trigger confetti on component mount
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      
      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        origin: { y: 0.6 }
      });
      
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-4 pb-4 border-b">
          <button 
            onClick={() => navigate('/')} 
            className="text-rru-red hover:text-rru-red/80 text-sm"
          >
            &larr; Return to Homepage
          </button>
        </div>
        <div className="mt-12 bg-white p-6 rounded-lg border border-slate-200 text-center">
          <h3 className="text-xl font-bold mb-4">You've Conquered RRU Treasure Quest!</h3>
          <p className="mb-6">
            Fantastic job solving all the clues and navigating the campus. 
            The final treasure awaits you at the coordinates above.
          </p>
          <Button 
            onClick={() => navigate('/')} 
            className="btn-primary"
          >
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinalClue;
