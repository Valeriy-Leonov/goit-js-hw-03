const numberRedVaz = ['AX', '3013', 'BX'];

function decoding() {
  const result = [];
  const propertyNumberRedVaz = [
    'Region code:',
    'Registration number:',
    'Series:',
  ];

  for (
    let i = 0;
    numberRedVaz.length > i, propertyNumberRedVaz.length > i;
    i++
  ) {
    const pluss = propertyNumberRedVaz[i];
    const item = numberRedVaz[i];
    const prepearedItem = pluss + '_' + item;
    result.push(prepearedItem);
  }
  return result;
}

console.log(decoding());
