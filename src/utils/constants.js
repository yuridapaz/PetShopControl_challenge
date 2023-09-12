export const pets = {
  Cachorro: {
    racas: [
      'Sem Raça Definida (SRD)',
      'Afegão Hound',
      'Affenpinscher',
      'Airedale Terrier',
      'Akita',
      'American Staffordshire Terrier',
      'Basenji',
      'Basset Hound',
      'Beagle',
      'Beagle Harrier',
      'Bearded Collie',
      'Bedlington Terrier',
      'Bichon Frisé',
      'Bloodhound',
      'Bobtail',
      'Boiadeiro Australiano',
      'Boiadeiro Bernês',
      'Border Collie',
      'Border Terrier',
      'Borzoi',
      'Boston Terrier',
      'Boxer',
      'Buldogue Francês',
      'Buldogue Inglês',
      'Bull Terrier',
      'Bulmastife',
      'Cairn Terrier',
      'Cane Corso',
      'Cão de Água Português',
      'Cão de Crista Chinês',
      'Cavalier King Charles Spaniel',
      'Chesapeake Bay Retriever',
      'Chihuahua',
      'Chow Chow',
      'Cocker Spaniel Americano',
      'Cocker Spaniel Inglês',
      'Collie',
      'Coton de Tuléar',
      'Dachshund',
      'Dálmata',
      'Dandie Dinmont Terrier',
      'Dobermann',
      'Dogo Argentino',
      'Dogue Alemão',
      'Fila Brasileiro',
      'Fox Terrier (Pelo Duro e Pelo Liso)',
      'Foxhound Inglês',
      'Galgo Escocês',
      'Galgo Irlandês',
      'Golden Retriever',
      'Grande Boiadeiro Suiço',
      'Greyhound',
      'Grifo da Bélgica',
      'Husky Siberiano',
      'Jack Russell Terrier',
      'King Charles',
      'Komondor',
      'Labradoodle',
      'Labrador Retrieve',
      'Lakeland Terrier',
      'Leonberger',
      'Lhasa Apso',
      'Lulu da Pomerânia',
      'Malamute do Alasca',
      'Maltês',
      'Mastife',
      'Mastim Napolitano',
      'Mastim Tibetano',
      'Norfolk Terrier',
      'Norwich Terrier',
      'Papillon',
      'Pastor Alemão',
      'Pastor Australiano',
      'Pinscher Miniatura',
      'Poodle',
      'Pug',
      'Rottweiler',
      'Schnauzer',
      'ShihTzu',
      'Silky Terrier',
      'Skye Terrier',
      'Staffordshire Bull Terrier',
      'Terra Nova',
      'Terrier Escocês',
      'Tosa',
      'Weimaraner',
      'Welsh Corgi (Cardigan)',
      'Welsh Corgi (Pembroke)',
      'West Highland White Terrier',
      'Whippet',
      'Xoloitzcuintli',
      'Yorkshire Terrier',
    ],
  },
  Gato: {
    racas: [
      'Sem Raça Definida (SRD)',
      'Persa',
      'Siamês',
      'Exótico',
      'American Shorthair',
      'Ashera',
      'Ragdoll',
      'Sphynx',
      'Angorá',
      'Maine Coon',
    ],
  },
  Pássaro: {
    racas: [
      'Sem Raça Definida (SRD)',
      'Arara',
      'Calopsita',
      'Canário',
      'Coleiro',
      'Curió',
      'Papagaio',
      'Pintassilgo',
      'Trinca-Ferro',
      'Tucano',
    ],
  },
};

export const getPetTypeList = () => {
  return Object.keys(pets);
};

export const getPetRaceList = (typeOfPet) => {
  if (['Nenhum', 'Outro', ''].includes(typeOfPet)) return [];
  return pets[typeOfPet]?.racas;
};