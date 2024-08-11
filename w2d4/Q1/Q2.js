function smartRepeatedLogger(message, interval, duration) {
  let intervalId = null;
  let remainingTime = duration;
  let lastPauseTime = 0;
  
  const startLogging = () => {
      const startTime = Date.now();
      intervalId = setInterval(() => {
          if (Date.now() - startTime >= remainingTime) {
              clearInterval(intervalId);
          }
          console.log(message);
      }, interval);
  };

  startLogging();
  
  const logger = {
      pause: () => {
          if (intervalId !== null) {
              clearInterval(intervalId);
              remainingTime -= Date.now() - lastPauseTime;
              lastPauseTime = Date.now();
          }
      },
      resume: () => {
          if (intervalId === null) {
              startLogging();
          }
      }
  };

  setTimeout(() => {
      clearInterval(intervalId);
  }, duration);

  return logger;
}

// Example usage:
const logger = smartRepeatedLogger("Logging...", 1000, 10000);
setTimeout(() => logger.pause(), 3000); // Pauses after 3 seconds
setTimeout(() => logger.resume(), 6000); // Resumes after 6 seconds
