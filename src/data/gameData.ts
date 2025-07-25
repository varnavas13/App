export interface GameStar {
  id: string;
  name: string;
  difficulty: number;
  imageUrl: string;
  category: string;
  solved: boolean;
}

export interface GameLevel {
  id: string;
  title: string;
  type: 'themed' | 'regular';
  theme?: string;
  stars: GameStar[];
  unlocked: boolean;
  completed: boolean;
  coinsReward: number;
}

export const movieStarsData: GameLevel[] = [
  // Regular Levels
  {
    id: 'level-1',
    title: 'Level 1 - Easy Stars',
    type: 'regular',
    stars: [
      {
        id: 'tom-hanks',
        name: 'TOM HANKS',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      },
      {
        id: 'will-smith',
        name: 'WILL SMITH',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'brad-pitt',
        name: 'BRAD PITT',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      },
      {
        id: 'leonardo-dicaprio',
        name: 'LEONARDO DICAPRIO',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      },
      {
        id: 'robert-downey-jr',
        name: 'ROBERT DOWNEY JR',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'jennifer-lawrence',
        name: 'JENNIFER LAWRENCE',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b639?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'scarlett-johansson',
        name: 'SCARLETT JOHANSSON',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'ryan-reynolds',
        name: 'RYAN REYNOLDS',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'emma-stone',
        name: 'EMMA STONE',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'chris-hemsworth',
        name: 'CHRIS HEMSWORTH',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'margot-robbie',
        name: 'MARGOT ROBBIE',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      },
      {
        id: 'chris-evans',
        name: 'CHRIS EVANS',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'anne-hathaway',
        name: 'ANNE HATHAWAY',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      },
      {
        id: 'ryan-gosling',
        name: 'RYAN GOSLING',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      },
      {
        id: 'natalie-portman',
        name: 'NATALIE PORTMAN',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      }
    ],
    unlocked: true,
    completed: false,
    coinsReward: 150
  },
  
  // Themed Level - Action Heroes
  {
    id: 'action-heroes',
    title: 'Action Heroes',
    type: 'themed',
    theme: 'Action Stars',
    stars: [
      {
        id: 'the-rock',
        name: 'THE ROCK',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'jason-statham',
        name: 'JASON STATHAM',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'vin-diesel',
        name: 'VIN DIESEL',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'keanu-reeves',
        name: 'KEANU REEVES',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'tom-cruise',
        name: 'TOM CRUISE',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'arnold-schwarzenegger',
        name: 'ARNOLD SCHWARZENEGGER',
        difficulty: 3,
        imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'sylvester-stallone',
        name: 'SYLVESTER STALLONE',
        difficulty: 3,
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'bruce-willis',
        name: 'BRUCE WILLIS',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'liam-neeson',
        name: 'LIAM NEESON',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'gerard-butler',
        name: 'GERARD BUTLER',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'hugh-jackman',
        name: 'HUGH JACKMAN',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'mark-wahlberg',
        name: 'MARK WAHLBERG',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'matt-damon',
        name: 'MATT DAMON',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'jeremy-renner',
        name: 'JEREMY RENNER',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'idris-elba',
        name: 'IDRIS ELBA',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'michael-b-jordan',
        name: 'MICHAEL B JORDAN',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'john-boyega',
        name: 'JOHN BOYEGA',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      },
      {
        id: 'oscar-isaac',
        name: 'OSCAR ISAAC',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face',
        category: 'Action',
        solved: false
      }
    ],
    unlocked: false,
    completed: false,
    coinsReward: 200
  },

  // Regular Level 2
  {
    id: 'level-2',
    title: 'Level 2 - Rising Stars',
    type: 'regular',
    stars: [
      {
        id: 'timothee-chalamet',
        name: 'TIMOTHEE CHALAMET',
        difficulty: 3,
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      },
      {
        id: 'zendaya',
        name: 'ZENDAYA',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b639?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      },
      {
        id: 'anya-taylor-joy',
        name: 'ANYA TAYLOR JOY',
        difficulty: 3,
        imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      },
      {
        id: 'florence-pugh',
        name: 'FLORENCE PUGH',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      },
      {
        id: 'saoirse-ronan',
        name: 'SAOIRSE RONAN',
        difficulty: 3,
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      },
      {
        id: 'lucas-hedges',
        name: 'LUCAS HEDGES',
        difficulty: 3,
        imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      },
      {
        id: 'noah-centineo',
        name: 'NOAH CENTINEO',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face',
        category: 'Romance',
        solved: false
      },
      {
        id: 'lana-condor',
        name: 'LANA CONDOR',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        category: 'Romance',
        solved: false
      },
      {
        id: 'jacob-elordi',
        name: 'JACOB ELORDI',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      },
      {
        id: 'sydney-sweeney',
        name: 'SYDNEY SWEENEY',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      },
      {
        id: 'hunter-schafer',
        name: 'HUNTER SCHAFER',
        difficulty: 3,
        imageUrl: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      },
      {
        id: 'jacob-tremblay',
        name: 'JACOB TREMBLAY',
        difficulty: 3,
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
        category: 'Drama',
        solved: false
      },
      {
        id: 'millie-bobby-brown',
        name: 'MILLIE BOBBY BROWN',
        difficulty: 3,
        imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face',
        category: 'Sci-Fi',
        solved: false
      },
      {
        id: 'finn-wolfhard',
        name: 'FINN WOLFHARD',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        category: 'Sci-Fi',
        solved: false
      },
      {
        id: 'gaten-matarazzo',
        name: 'GATEN MATARAZZO',
        difficulty: 3,
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        category: 'Sci-Fi',
        solved: false
      }
    ],
    unlocked: false,
    completed: false,
    coinsReward: 180
  },

  // Themed Level - Comedy Legends
  {
    id: 'comedy-legends',
    title: 'Comedy Legends',
    type: 'themed',
    theme: 'Comedy Stars',
    stars: [
      {
        id: 'jim-carrey',
        name: 'JIM CARREY',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'adam-sandler',
        name: 'ADAM SANDLER',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'steve-carell',
        name: 'STEVE CARELL',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'will-ferrell',
        name: 'WILL FERRELL',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'ben-stiller',
        name: 'BEN STILLER',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'owen-wilson',
        name: 'OWEN WILSON',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'vince-vaughn',
        name: 'VINCE VAUGHN',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'seth-rogen',
        name: 'SETH ROGEN',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'jonah-hill',
        name: 'JONAH HILL',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'michael-cera',
        name: 'MICHAEL CERA',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'paul-rudd',
        name: 'PAUL RUDD',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'jason-segel',
        name: 'JASON SEGEL',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'kevin-hart',
        name: 'KEVIN HART',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'chris-rock',
        name: 'CHRIS ROCK',
        difficulty: 1,
        imageUrl: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'eddie-murphy',
        name: 'EDDIE MURPHY',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      },
      {
        id: 'dave-chappelle',
        name: 'DAVE CHAPPELLE',
        difficulty: 2,
        imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face',
        category: 'Comedy',
        solved: false
      }
    ],
    unlocked: false,
    completed: false,
    coinsReward: 220
  }
];

// Soccer Teams Data
export interface SoccerTeam {
  id: string;
  name: string;
  difficulty: number;
  logoUrl: string;
  league: string;
  country: string;
  solved: boolean;
}

export interface SoccerLevel {
  id: string;
  title: string;
  type: 'themed' | 'regular';
  theme?: string;
  teams: SoccerTeam[];
  unlocked: boolean;
  completed: boolean;
  coinsReward: number;
}

export const soccerTeamsData: SoccerLevel[] = [
  // Regular Level 1 - Famous Teams
  {
    id: 'soccer-level-1',
    title: 'Level 1 - World Famous',
    type: 'regular',
    teams: [
      {
        id: 'real-madrid',
        name: 'REAL MADRID',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop',
        league: 'La Liga',
        country: 'Spain',
        solved: false
      },
      {
        id: 'barcelona',
        name: 'BARCELONA',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop',
        league: 'La Liga',
        country: 'Spain',
        solved: false
      },
      {
        id: 'manchester-united',
        name: 'MANCHESTER UNITED',
        difficulty: 2,
        logoUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'liverpool',
        name: 'LIVERPOOL',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'chelsea',
        name: 'CHELSEA',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'arsenal',
        name: 'ARSENAL',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'manchester-city',
        name: 'MANCHESTER CITY',
        difficulty: 2,
        logoUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'bayern-munich',
        name: 'BAYERN MUNICH',
        difficulty: 2,
        logoUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=200&h=200&fit=crop',
        league: 'Bundesliga',
        country: 'Germany',
        solved: false
      },
      {
        id: 'juventus',
        name: 'JUVENTUS',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop',
        league: 'Serie A',
        country: 'Italy',
        solved: false
      },
      {
        id: 'ac-milan',
        name: 'AC MILAN',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop',
        league: 'Serie A',
        country: 'Italy',
        solved: false
      },
      {
        id: 'inter-milan',
        name: 'INTER MILAN',
        difficulty: 2,
        logoUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop',
        league: 'Serie A',
        country: 'Italy',
        solved: false
      },
      {
        id: 'psg',
        name: 'PSG',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=200&h=200&fit=crop',
        league: 'Ligue 1',
        country: 'France',
        solved: false
      },
      {
        id: 'borussia-dortmund',
        name: 'BORUSSIA DORTMUND',
        difficulty: 3,
        logoUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop',
        league: 'Bundesliga',
        country: 'Germany',
        solved: false
      },
      {
        id: 'atletico-madrid',
        name: 'ATLETICO MADRID',
        difficulty: 2,
        logoUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop',
        league: 'La Liga',
        country: 'Spain',
        solved: false
      },
      {
        id: 'tottenham',
        name: 'TOTTENHAM',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      }
    ],
    unlocked: true,
    completed: false,
    coinsReward: 150
  },

  // Themed Level - Premier League
  {
    id: 'premier-league',
    title: 'Premier League Giants',
    type: 'themed',
    theme: 'Premier League',
    teams: [
      {
        id: 'west-ham',
        name: 'WEST HAM',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'leicester-city',
        name: 'LEICESTER CITY',
        difficulty: 2,
        logoUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'everton',
        name: 'EVERTON',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'aston-villa',
        name: 'ASTON VILLA',
        difficulty: 2,
        logoUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'newcastle',
        name: 'NEWCASTLE',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'wolverhampton',
        name: 'WOLVERHAMPTON',
        difficulty: 3,
        logoUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'crystal-palace',
        name: 'CRYSTAL PALACE',
        difficulty: 2,
        logoUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'brighton',
        name: 'BRIGHTON',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'southampton',
        name: 'SOUTHAMPTON',
        difficulty: 2,
        logoUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'burnley',
        name: 'BURNLEY',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'leeds-united',
        name: 'LEEDS UNITED',
        difficulty: 2,
        logoUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'norwich-city',
        name: 'NORWICH CITY',
        difficulty: 2,
        logoUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'watford',
        name: 'WATFORD',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'brentford',
        name: 'BRENTFORD',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'fulham',
        name: 'FULHAM',
        difficulty: 1,
        logoUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      },
      {
        id: 'sheffield-united',
        name: 'SHEFFIELD UNITED',
        difficulty: 3,
        logoUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop',
        league: 'Premier League',
        country: 'England',
        solved: false
      }
    ],
    unlocked: false,
    completed: false,
    coinsReward: 200
  }
];