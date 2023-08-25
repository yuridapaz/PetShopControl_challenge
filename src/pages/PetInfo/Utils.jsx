const calculateCurrentAge = (petTimeStamp) => {
  const diffTime = new Date() - new Date(petTimeStamp);
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  let newAgeObj = {
    anos: Math.floor(totalDays / 365.25),
    meses: Math.floor((totalDays % 365.25) / 30.4375),
    dias: Math.floor((totalDays % 365.25) % 30.4375),
  };
  return newAgeObj;
};

// Primeira função que fiz no susto

const petAgeInfo = (petAgeOjb) => {
  if (petAgeOjb.anos === 0 && petAgeOjb.meses === 0) {
    return console.log(`Pet tem apenas ${petAgeOjb.dias} dias`);
  }
  if (petAgeOjb.anos === 0) {
    return console.log(`Pet tem apenas ${petAgeOjb.meses} meses`);
  }
  console.log(
    `Pet tem ${petAgeOjb.anos} ano${petAgeOjb.anos > 1 ? 's' : ''} e ${petAgeOjb.meses} ${
      petAgeOjb.meses > 1 ? 'meses' : 'mês'
    }. `
  );
};

// Segunda função que decidi fazer para brincar com object.keys e for loop,
// tentando reduzir a ternary operation do primeiro ( que fica bem sujo visualmente ).

const calculateDisplayAge = (petAgeObject) => {
  for (let i = 0; i < Object.keys(petAgeObject).length; i++) {
    let displayPhrase = '';

    if (petAgeObject.anos === 0 && petAgeObject.meses === 0) {
      displayPhrase = displayPhrase + petAgeObject.dias + ' dias.';
    } else if (petAgeObject.anos === 0) {
      displayPhrase =
        displayPhrase +
        petAgeObject.meses +
        (petAgeObject.meses > 0 ? ' meses ' : ' mês.');
    } else {
      displayPhrase =
        displayPhrase +
        petAgeObject.anos +
        (petAgeObject.anos > 1 ? ' anos ' : ' ano ') +
        petAgeObject.meses +
        (petAgeObject.meses > 1 ? ' meses ' : ' mês.');
    }

    return displayPhrase;
  }
};

////
