
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ClueNumber, Team, getClue, validateCode } from '@/utils/gameData';
import ClueCard from '@/components/ClueCard';
import CodeInput from '@/components/CodeInput';
import { toast } from "@/components/ui/sonner";

const ClueView = () => {
  const { teamId, clueId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Validate team and clue ID
  const isValidTeam = teamId === '1' || teamId === '2' || teamId === '3' || teamId === '4';
  const isValidClue = clueId === '1' || clueId === '2' || clueId === '3' || clueId === '4' || clueId === '5' || clueId === '6';
  
  const clue = isValidTeam && isValidClue 
    ? getClue(teamId as Team, clueId as ClueNumber)
    : null;
    
  useEffect(() => {
    if (!isValidTeam || !isValidClue) {
      setError('Invalid team or clue ID. Please check your URL.');
      toast.error('Invalid page requested');
    } else if (!clue) {
      setError('Clue not found. Please return to the homepage.');
      toast.error('Clue not found');
    } else {
      setError(null);
    }
    
    setLoading(false);
  }, [teamId, clueId, isValidTeam, isValidClue, clue]);
  
  const handleValidCode = () => {
    if (!isValidTeam || !isValidClue) return;
    
    const nextClueNumber = parseInt(clueId as string) + 1;
    
    if (nextClueNumber <= 5) {
      navigate(`/team/${teamId}/clue/${nextClueNumber}`);
    } else {
      // This is the final clue (5), so navigate to the final page
      navigate(`/team/${teamId}/final`);
    }
  };
  
  const handleCodeValidation = (code: string): boolean => {
    if (!isValidTeam || !isValidClue) return false;
    return validateCode(teamId as Team, clueId as ClueNumber, code);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg animate-pulse">Loading clue...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-destructive/10 text-destructive p-4 rounded-md max-w-md text-center">
          <p className="text-lg font-medium mb-4">{error}</p>
          <button 
            onClick={() => navigate('/')} 
            className="px-4 py-2 bg-rru-red text-white rounded-md"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

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
        
        {clue && (
          <>
            <ClueCard 
              teamNumber={teamId as string} 
              clueNumber={clueId as string}
              clue={clue}
            />
            <CodeInput 
              onValidCode={handleValidCode} 
              validateCode={handleCodeValidation}
            />
          </>
        )}

        {/* Final clue additional guidance - removed Morse code reference */}
        {clueId === '5' && (
          <div className="mt-6 p-4 border border-amber-200 bg-amber-50 rounded-md">
            <p className="text-amber-800 text-sm">
              <strong>Note:</strong> This is your final location challenge! Once you validate this code, 
              you'll receive the final treasure coordinates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClueView;
