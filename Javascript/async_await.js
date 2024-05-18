// Async / Await

// Async = makes a function return a promise
// Await = makes an async function wait for a promise

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walkedDog = true;
      if (walkedDog) {
        resolve("I walk the dog");
      } else {
        reject("I didn't walk the dog");
      }
    }, 1000);
  });
}

function feedCat() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fedCat = true;
      if (fedCat) {
        resolve("I feed the cat");
      } else {
        reject("I didn't feed the cat");
      }
    }, 2000);
  });
}

function takeNap() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tookNap = false;
      if (tookNap) {
        resolve("I take a nap");
      } else {
        reject("I didn't take a nap");
      }
    }, 3000);
  });
}

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const feedCatResult = await feedCat();
    console.log(feedCatResult);

    const takeNapResult = await takeNap();
    console.log(takeNapResult);

    console.log("I am done");
  } catch (error) {
    console.log(error);
  }
}

doChores();
