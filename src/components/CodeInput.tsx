
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, X } from "lucide-react";
import { toast } from "@/components/ui/sonner";

interface CodeInputProps {
  onValidCode: () => void;
  validateCode: (code: string) => boolean;
}

const CodeInput: React.FC<CodeInputProps> = ({ onValidCode, validateCode }) => {
  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    
    // Simulate a slight delay to show the checking state
    setTimeout(() => {
      const valid = validateCode(code);
      setIsValid(valid);
      
      if (valid) {
        toast.success("Code validated! Unlocking next clue...");
        setTimeout(() => {
          onValidCode();
        }, 1500);
      } else {
        toast.error("Invalid code. Try again!");
      }
      
      setIsChecking(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="code" className="text-sm font-medium text-gray-700">
            Enter the code found at this location:
          </label>
          <Input
            id="code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full py-3 text-lg font-mono uppercase tracking-wider text-center border-2 focus:border-rru-red focus:ring-rru-red"
            placeholder="ENTER CODE"
            autoComplete="off"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full py-6 text-lg btn-primary flex items-center justify-center gap-2"
          disabled={isChecking || !code.trim()}
        >
          {isChecking ? (
            <>
              <span className="animate-pulse">Validating...</span>
            </>
          ) : isValid === true ? (
            <>
              <Check size={20} />
              <span>Validated!</span>
            </>
          ) : isValid === false ? (
            <>
              <X size={20} />
              <span>Try Again</span>
            </>
          ) : (
            <span>Validate Code</span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default CodeInput;
