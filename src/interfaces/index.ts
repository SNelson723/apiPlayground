export interface PokeDetails {
  name: string;
  url: string;
  // and any other fields I want to use
}

export interface Poke {
  base_experience: number;
  weight: number;
  height: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  id: number;
  name: string;
}

export interface PokeCardProps {
  name: string;
  url: string;
}