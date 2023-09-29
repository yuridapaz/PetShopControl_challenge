export type EditPetParams = {
  id: string | undefined;
};

export type EditPetValues = {
  name: string;
  type: 'Cachorro' | 'Gato' | 'Pássaro' | 'Outro';
  race: string;
  gender: 'Macho' | 'Fêmea';
  weight: number;
  size: 'Micro' | 'Pequeno' | 'Médio' | 'Grande' | 'Gigante';
  birthdate: { getTime: () => any };
  notes: string;
  services: [];
};
