document.getElementById("run").addEventListener("click", async () => {
  const times = Number(document.getElementById("times").value);

  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: automate,
    args: [times]
  });
});

function automate(times) {
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const words = [
    "Moonlight",
    "Albert Einstein",
    "The coffee went cold before the idea arrived.",
    "Avalanche",
    "Beyoncé",
    "Time feels different at 3 a.m.",
    "Cactus",
    "Leonardo da Vinci",
    "The cat stared like it knew everything.",
    "Orbit",
    "Taylor Swift",
    "Rain makes the city softer.",
    "Lighthouse",
    "Nelson Mandela",
    "He forgot why he walked into the room.",
    "Echo",
    "Frida Kahlo",
    "The pizza box was empty but hopeful.",
    "Glacier",
    "Elon Musk",
    "Silence can be loud.",
    "Lantern",
    "Marie Curie",
    "The bus arrived exactly too late.",
    "Whistle",
    "Michael Jackson",
    "Dreams rarely follow instructions.",
    "Compass",
    "Oprah Winfrey",
    "The window was open to possibilities.",
    "Sparrow",
    "William Shakespeare",
    "Socks disappear for a reason.",
    "Thunder",
    "Rihanna",
    "The sky looked painted.",
    "Notebook",
    "Steve Jobs",
    "He laughed at the wrong moment.",
    "Mirage",
    "Serena Williams",
    "Night trains feel mysterious.",
    "Pebble",
    "Barack Obama",
    "The song got stuck forever.",
    "Horizon",
    "Adele",
    "It smelled like summer rain.",
    "Velvet",
    "Pablo Picasso",
    "The clock judged him silently.",
    "Neon",
    "Keanu Reeves",
    "She waved to no one.",
    "Sandstorm",
    "Galileo Galilei",
    "The phone buzzed with nothing.",
    "Comet",
    "Angelina Jolie",
    "The chair creaked in protest.",
    "Ink",
    "Martin Luther King Jr.",
    "Laughter filled the hallway.",
    "Blueprint",
    "Billie Eilish",
    "He trusted the wrong umbrella.",
    "Marble",
    "Abraham Lincoln",
    "The room smelled like old books.",
    "Tundra",
    "Cristiano Ronaldo",
    "The light flickered dramatically.",
    "Magnet",
    "Audrey Hepburn",
    "She whispered to the stars.",
    "Obsidian",
    "Nikola Tesla",
    "The elevator paused suspiciously.",
    "Prism",
    "Zendaya",
    "It was quieter than expected.",
    "Fossil",
    "Bruce Lee",
    "The map was upside down.",
    "Pulse",
    "Johnny Depp",
    "The dog understood everything.",
    "Eclipse",
    "Malala Yousafzai",
    "The night smelled electric.",
    "Anchor",
    "Tom Hanks",
    "He saved the last slice.",
    "Paradox",
    "Virginia Woolf",
    "The street hummed softly.",
    "Static",
    "Dwayne Johnson",
    "Tomorrow felt negotiable.",
    "Firefly"
  ];

  function randomText() {
    const count = 1 + Math.floor(Math.random() * 2);
    let text = [];
    for (let i = 0; i < count; i++) {
      text.push(words[Math.floor(Math.random() * words.length)]);
    }
    return text.join(" ");
  }

  async function run() {
    const input = document.querySelector("input[type='search'], input");

    if (!input) {
      alert("No input field found");
      return;
    }

    for (let i = 0; i < times; i++) {
      const value = randomText();

      input.focus();
      input.value = value;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true })
      );

      console.log(`Typed (${i + 1}/${times}):`, value);
      await sleep(2000 + Math.random() * 3000);
    }
  }

  run();
}
