export type RegisterFormInputs = {
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
