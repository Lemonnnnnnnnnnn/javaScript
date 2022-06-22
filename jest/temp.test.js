const req = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error')
    }, 1000)
  })
}

test('test req', async () => {
  // expect.assertions(1);
  return req().catch(e => expect(e).toMatch('error'));
});