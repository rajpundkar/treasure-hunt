export type Team = '1' | '2' | '3' | '4';
export type ClueNumber = '1' | '2' | '3' | '4' | '5' | '6';

export interface Clue {
  id: string;
  text: string;
  validationCode: string;
  hint?: string;
}

export interface TeamClues {
  [key: string]: Clue;
}

// Team security codes
export const TEAM_SECURITY_CODES: Record<Team, string> = {
  '1': 'T1#2025',
  '2': 'T2#2020',
  '3': 'T3#2015',
  '4': 'T4#2034'
};

// Validate team security code
export const validateTeamSecurityCode = (team: string, code: string): boolean => {
  if (!TEAM_SECURITY_CODES[team as Team]) return false;
  return TEAM_SECURITY_CODES[team as Team].toLowerCase() === code.toLowerCase();
};

// Final coordinates in Morse code
export const FINAL_COORDINATES = {
  latitude: "..--- ...-- -.. . --. .-. . . ... -.... ----. -- .. -. ..- - . ... -. --- .-. - ....",
  longitude: "..... ..... -.. . --. .-. . . ... .---- ....- -- .. -. ..- - . ... . .- ... -",
  decoded: { lat: 23.69, lng: 55.14 },
  // Final morse code validation
  finalCode: "..... ...- ...-- -- .-.-. ..... -..- ----.."
};

// Clue data for each team
export const TEAM_CLUES: Record<Team, TeamClues> = {
  '1': {
    '1': {
      id: 'team1-clue1',
      text: "Find the small cabin, where all must pass through, To uncover the treasure that’s waiting for you.",
      validationCode: 'S1#1061'
    },
    '2': {
      id: 'team1-clue2',
      text: "I’m marked with lines, yet I’m not a maze, Here players shine, and the crowd will praise. In the heart of the action, your next clue lies, Where the thrill of the chase reaches for the skies!",
      validationCode: 'S2#1063'
    },
    '3': {
      id: 'team1-clue3',
      text: "It hosts no books, yet stories grow, In every run, a tale does flow. Marks are made, but not with pen, Battles fought by numbered men. Look not inside, but wide and round — Where turf is king, your clue is found.",
      validationCode: 'FB#0217'
    },
    '4': {
      id: 'team1-clue4',
      text: "Not quite a home, yet numbered and neat, A grid for the weary with rubber feet. No engine roars, no tires spin, But here the journeys all begin. Seek the silence where travels cease, The treasure waits in parked-up peace.",
      validationCode: 'CP#0505'
    },
    '5': {
      id: 'team1-clue5',
      text: "Dots and dashes, short and long, A secret code, a tapping song. Not written in words, nor spoken aloud, But used by ships and skies in cloud. Decode the signs, don’t be slow, Your treasure hides where the signals show. (..... ...- ...-- -- .-.-. ..... -..- ---..)",
      validationCode: '5V3M+5X8'
    }
  },
  '2': {
    '1': {
      id: 'team2-clue1',
      text: "A hall once full of clatter and cheer, Now only silence lingers here. Empty tables, forgotten trays, your next clue hides where memories stay.",
      validationCode: 'OM#1689'
    },
    '2': {
      id: 'team2-clue2',
      text: "I’m filled with joy, with laughter loud, where children run and jump around. In me, you’ll slide and climb with ease, A place for fun, a place to please.",
      validationCode: 'CP#8979'
    },
    '3': {
      id: 'team2-clue3',
      text: "My breath is heavy, my gaze is deep, I’ve seen the earth and its secrets keep. I travel wide with ancient feet, but never hurried, never fleet. I don’t forget, and I don’t run, In quiet strength, I’ve always won.",
      validationCode: 'EP#4987'
    },
    '4': {
      id: 'team2-clue4',
      text: "Up high I stand, where the eagles soar, A place for wings, but I’m not a door. I help the brave reach heights they seek, In times of need, I’m strong, not weak. Find your next clue where I rest, look around carefully, for I hold the best!",
      validationCode: 'HP#5432'
    },
    '5': {
      id: 'team2-clue5',
      text: "Dots and dashes, short and long, A secret code, a tapping song. Not written in words, nor spoken aloud, But used by ships and skies in cloud. Decode the signs, don’t be slow, Your treasure hides where the signals show. (..... ...- ...-- -- .-.-. ..... -..- ---..)",
      validationCode: '5V3M+5X8'
    }
  },
  '3': {
    '1': {
      id: 'team3-clue1',
      text: "With rings intertwined, I honor the game, Exploring the journey of athletes’ fame. From training to triumph, I chart the course, what am I, where passion meets force?",
      validationCode: 'BC#2647'
    },
    '2': {
      id: 'team3-clue2',
      text: "Beyond where bricks and dust arise, A gate now stands, not yet wise. Beside it, dreams of learning grow, Where Raksha Shakti's hopes will flow. Close by, a future home takes shape, For scholars who through nights escape. Find the place where silence hums, And progress beats like distant drums.",
      validationCode: 'S3#0101'
    },
    '3': {
      id: 'team3-clue3',
      text: "Where hunger fades and plates are full, A place of chatter, never dull. With two fans spinning tales in air, Find the screen that gathers stare. Beneath its glow, your clue does rest, On the table — begin your quest!",
      validationCode: 'AP#5656'
    },
    '4': {
      id: 'team3-clue4',
      text: "A home to healing, books, and plans, Where service flows through many hands. New in stone, yet core in role, It ties the campus as a whole. Need a book, a bandage, or a map? This hub can bridge every gap. Seek the place where many routes blend — Your next clue hides where pathways end.",
      validationCode: 'SK#1234'
    },
    '5': {
      id: 'team3-clue5',
      text: "Dots and dashes, short and long, A secret code, a tapping song. Not written in words, nor spoken aloud, but used by ships and skies in cloud. Decode the signs, don’t be slow, Your treasure hides where the signals show. (..... ...- ...-- -- .-.-. ..... -..- ---..)",
      validationCode: '5V3M+5X8'
    }
  },
  '4': {
    '1': {
      id: 'team4-clue1',
      text: "Ones's been passed, now seek out more, I stands as a number two in the door I open way to what's ahead', Find me fast, just like I said!",
      validationCode: 'S2#2222'
    },
    '2': {
      id: 'team4-clue2',
      text: "Not a castle, but made of steel, in rows they stand, a modern feel. At RRU, they twist and turn, A place for minds that strive and yearn. Seek the spot where colors blend",
      validationCode: 'CC#8756'
    },
    '3': {
      id: 'team4-clue3',
      text: "No chalk, no board, but knowledge flows, Where silence speaks and stillness grows. A coat of white, a badge of grace, they fight for life in a hidden place. It’s not a class, it’s not a lab, but here you go when things go drab.",
      validationCode: 'MC#5555'
    },
    '4': {
      id: 'team4-clue4',
      text: "I sink to save, I fall to hold, In seas of blue, in storms of cold. I am the weight that sets you free, A prison forged to guard the sea.",
      validationCode: 'SA#4321'
    },
    '5': {
      id: 'team4-clue5',
      text: "Where voices echo in morning air, and all stand tall with pride and care. A tricolor rises, hearts beat loud, this platform draws a silent crowd. At RRU, where respect is shown— Find your clue where the flag is flown.",
      validationCode: 'FH@1478'
    }
  }
};

// Function to validate a code for a specific team and clue
export const validateCode = (team: Team, clueNumber: ClueNumber, code: string): boolean => {
  const clue = TEAM_CLUES[team]?.[clueNumber];
  if (!clue) return false;
  return clue.validationCode.toLowerCase() === code.toLowerCase();
};

// Function to get a specific clue
export const getClue = (team: Team, clueNumber: ClueNumber): Clue | null => {
  return TEAM_CLUES[team]?.[clueNumber] || null;
};
