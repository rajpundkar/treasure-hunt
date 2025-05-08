import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";
import { validateTeamSecurityCode } from "@/utils/gameData";

const TeamLogin: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [securityCode, setSecurityCode] = useState<string>('');
  const [isCodeValid, setIsCodeValid] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const handleTeamSelect = (teamValue: string) => {
    setSelectedTeam(teamValue);
    setSecurityCode('');
    setIsCodeValid(null);
  };

  const validateCode = () => {
    if (!selectedTeam) {
      toast.error("Please select a team first");
      return;
    }

    if (!securityCode) {
      toast.error("Please enter the security code");
      return;
    }

    const isValid = validateTeamSecurityCode(selectedTeam, securityCode);
    setIsCodeValid(isValid);

    if (isValid) {
      toast.success(`Security code valid for Team ${selectedTeam}! Starting your hunt...`);
      // Start all teams from clue 1
      navigate(`/team/${selectedTeam}/clue/1`);
    } else {
      toast.error("Invalid security code. Please try again.");
    }
  };

  const teamNames = {
    '1': 'Raunak',
    '2': 'Sharvil',
    '3': 'Anshuman',
    '4': 'Kunal'
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Select Your Team</CardTitle>
        <CardDescription>Choose your assigned team to begin the hunt</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <RadioGroup className="gap-4" onValueChange={handleTeamSelect} value={selectedTeam || undefined}>
          {Object.entries(teamNames).map(([id, name]) => (
            <div key={id} className="flex items-center space-x-2">
              <RadioGroupItem value={id} id={`team-${id}`} />
              <Label htmlFor={`team-${id}`} className="text-lg">Team {id}: {name}</Label>
            </div>
          ))}
        </RadioGroup>

        {selectedTeam && (
          <div className="pt-4 border-t">
            <label htmlFor="security-code" className="block text-sm font-medium text-gray-700 mb-2">
              Enter Team Security Code:
            </label>
            <Input
              id="security-code"
              type="text"
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
              placeholder="Enter security code"
              className={`w-full ${isCodeValid === false ? 'border-red-500' : ''}`}
            />
            {isCodeValid === false && (
              <p className="mt-1 text-red-500 text-sm">Invalid security code</p>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={validateCode} 
          className="w-full btn-primary py-6" 
          disabled={!selectedTeam}
        >
          Start the Hunt
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TeamLogin;
