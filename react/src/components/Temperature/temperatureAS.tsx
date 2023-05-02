// const flashId = "temperatureStage";

const setup = () => {
  setTimeout(() => {
    console.log("temperatureAS setup")
  }, 100);
};

// const play = () => {
//   console.log("temperatureAS play", )
// };

const resize = () => {
  setTimeout(() => {
    //blink
    setTimeout(() => {
      // unblink
      setTimeout(() => {
        console.log("temperatureAS resize")
      },50);
    }, 50);
  }, 50);
};

export const temperatureAS = (action: string): any=> async () => {
  try {
    if (action === "SETUP") setup();
    if (action === "RESIZE") resize();
  } catch (error: any) {
    console.warn("temperatureAS error", error)
  };
};
