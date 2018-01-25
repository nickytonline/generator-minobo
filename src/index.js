(async () => {
  // eslint-disable-next-line no-console
  console.log('Another message should follow...');

  const waitingForMessage = new Promise(resolve => {
    resolve(`Hello, is it me you're looking for?`);
  });
  const message = await waitingForMessage;

  console.log(message); // eslint-disable-line no-console
})();
