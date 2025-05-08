
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { type Clue } from "@/utils/gameData";

interface ClueCardProps {
  teamNumber: string;
  clueNumber: string;
  clue: Clue;
}

const ClueCard: React.FC<ClueCardProps> = ({ teamNumber, clueNumber, clue }) => {
  const [showHint, setShowHint] = useState(false);

  return (
    <Card className="w-full animate-fade-in clue-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">Team {teamNumber} – Clue #{clueNumber}</CardTitle>
          {clue.hint && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setShowHint(!showHint)}
                    className="rounded-full text-rru-red hover:text-rru-red hover:bg-rru-red/10"
                  >
                    <Info size={20} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click for a hint</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <CardDescription>
          Solve this riddle to find your next location
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-medium my-6 p-4 bg-rru-gray/50 rounded-lg border border-border">
          {clue.text}
        </p>
        
        {showHint && clue.hint && (
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md text-amber-800 animate-fade-in">
            <p className="text-sm font-medium">Hint: {clue.hint}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ClueCard;
