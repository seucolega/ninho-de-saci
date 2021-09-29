const cacheFiles = async (srcArray, toggleIsLoading) => {
  const promises = await srcArray.map((src) => {
    return new Promise(function (resolve, reject) {
      const file = new Image();
      file.src = src;
      file.onload = resolve();
      file.onerror = reject();
    });
  });

  await Promise.all(promises);

  toggleIsLoading();
};

export default cacheFiles;
