try {
  console.clear();
  const text = document.querySelector("textarea#text");
  const speak = document.getElementById("_speak");
  const pitch = document.getElementById("pitch");
  const rate = document.getElementById("rate");
  const volume = document.getElementById("volume");
  const textToRead = new SpeechSynthesisUtterance(text.value);
  textToRead.onstart = (e) => {
    console.log("Started", textToRead);
    console.log("Event:", e);
  };
  textToRead.onend = (e) => {
    console.log("Ended", textToRead);
    console.log("Event:", e);
  };
  textToRead.onpause = (e) => {
    console.log("Paused", textToRead);
    console.log("Event:", e);
  };
  textToRead.onresume = (e) => {
    console.log("Resumed", textToRead);
    console.log("Event:", e);
  };
  textToRead.onerror = console.error;
  textToRead.onmark = (e) => {
    console.log("Marked", textToRead);
    console.log("Event:", e);
  };
  textToRead.onboundary = (e) => {
    console.log("Hit a boundary on", textToRead);
    console.log("Event:", e);
  };
  function onvoiceschanged() {
    const voices = speechSynthesis.getVoices();
    const voices_l = document.getElementById("voices_l");
    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute("data-name", voice.name);
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute(
        "data-json",
        JSON.stringify({
          voiceURI: voice.voiceURI,
          name: voice.name,
          lang: voice.lang,
          localService: voice.localService,
          default: voice.default
        })
      );
      voices_l.appendChild(option);
    }
  }
  onvoiceschanged();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = onvoiceschanged;
  }
  speak.addEventListener("click", (e) => {
    speechSynthesis.cancel();
    textToRead.pitch = pitch.value;
    textToRead.rate = rate.value;
    textToRead.text = text.value;
    textToRead.volume = Number(volume.value);
    const voices_l = document.querySelector("select");
    for (const voice of speechSynthesis.getVoices())
      if (voice.name === voices_l.selectedOptions[0].getAttribute("data-name"))
        textToRead.voice = voice;
    textToRead.lang = textToRead.voice.lang;
    speechSynthesis.speak(textToRead);
    console.log("Speech Synthesis Utterance:", textToRead);
    console.log("Event:", e);
  });
} catch (e) {
  console.error(e);
}
