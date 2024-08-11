const wait = (ms) => new Promise((resolve) => setTimeout(resolve,ms));


async function delayedMultiGreeting(messages){
  for(const{message,delay} of messages) {
    await wait(delay);
    console.log(message);
  }
}



const messages = [
  { message: "Hello, world!", delay: 2000 },
  { message: "How are you?", delay: 1000 },
  { message: "Goodbye!", delay: 3000 }
];

// Calling the function
delayedMultiGreeting(messages);