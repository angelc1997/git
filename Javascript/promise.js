// Promise = an object that manages async operation

function walkDog(callback) {
  setTimeout(() => {
    console.log("I walk the dog");
    callback();
  }, 1000);
}

function feedCat(callback) {
  setTimeout(() => {
    console.log("I feed the cat");
    callback();
  }, 2000);
}

function takeNap(callback) {
  setTimeout(() => {
    console.log("I take a nap");
    callback();
  }, 3000);
}

walkDog(() => {
  feedCat(() => {
    takeNap(() => {
      console.log("I am done");
    });
  });
});

// 使用promise 避免callback hell

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

walkDog()
  .then((value) => {
    console.log(value);
    return feedCat();
  })
  .then((value) => {
    console.log(value);
    return takeNap();
  })
  .then((value) => {
    console.log(value);
    console.log("I am done");
  })
  .catch((error) => {
    console.log(error);
  });
