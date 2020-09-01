function formatString(string, maxLength = 40) {
  let sliceResult = string.slice(0, maxLength);
  if (sliceResult.length !== string.length) {
    sliceResult += '...';
  }
  return sliceResult;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'
