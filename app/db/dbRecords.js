export async function getRecords() {
  const peaople = [
    {
      name: 'lucas',
      lastName: 'cardozo',
      age: '24',
      date: 'jul 22,2023',
      record: 120,
    },
    {
      name: 'felipe',
      lastName: 'cardozo',
      age: '19',
      date: 'jul 22,2023',
      record: 115,
    },
    {
      name: 'bautista',
      lastName: 'risoli',
      age: '20',
      date: 'jul 22,2023',
      record: 127,
    },
    {
      name: 'enzo',
      lastName: 'rodrigues',
      age: '24',
      date: 'jul 22,2023',
      record: 112,
    },
  ];
  const dateNow = Date.now();
  const betterPeaople = peaople
    .filter((person) => {
      const dateParse = Date.parse(person.date);
      return dateNow - dateParse < 2592000000 && dateNow - dateParse > 0;
    })
    .sort((a, b) => (a.record > b.record ? -1 : 1))
    .slice(0, 3);
  return betterPeaople;
}
