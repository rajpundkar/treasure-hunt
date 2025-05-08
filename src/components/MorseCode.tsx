import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FINAL_COORDINATES } from "@/utils/gameData";

const MorseCode: React.FC = () => {
  const [showDecoded, setShowDecoded] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleDecode = () => {
    setShowDecoded(true);
  };

  const handleShowMap = () => {
    setShowMap(true);
  };

  return (
    <Card className="w-full mt-6 max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Final Coordinates (Morse Code)</CardTitle>
        <CardDescription>Decode these coordinates to find the final treasure location</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-white p-4 rounded-md border border-slate-200">
          <div className="font-mono space-y-4">
            <div>
              <span className="text-xs text-slate-500 block mb-1">LATITUDE:</span>
              <p className="morse text-lg tracking-wider break-all">{FINAL_COORDINATES.latitude}</p>
            </div>
            <div>
              <span className="text-xs text-slate-500 block mb-1">LONGITUDE:</span>
              <p className="morse text-lg tracking-wider break-all">{FINAL_COORDINATES.longitude}</p>
            </div>
            <div>
              <span className="text-xs text-slate-500 block mb-1">FINAL CODE:</span>
              <p className="morse text-lg tracking-wider break-all">{FINAL_COORDINATES.finalCode}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MorseCode;
