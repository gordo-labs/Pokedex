export interface Pokemon {
  forms: Form[];
  abilities: Ability[];
  stats: Stat[];
  name: string;
  weight: number;
  moves: any[];
  sprites: Sprites;
  held_items: any[];
  location_area_encounters: string;
  height: number;
  is_default: boolean;
  species: Form;
  id: number;
  order: number;
  game_indices: Gameindex[];
  base_experience: number;
  types: Type[];
}


interface Type {
  slot: number;
  type: Form;
}

interface Gameindex {
  version: Form;
  game_index: number;
}

interface Sprites {
  back_female?: any;
  back_shiny_female?: any;
  back_default: string;
  front_female?: any;
  front_shiny_female?: any;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface Stat {
  stat: Form;
  effort: number;
  base_stat: number;
}

interface Ability {
  slot: number;
  is_hidden: boolean;
  ability: Form;
}

interface Form {
  url: string;
  name: string;
}