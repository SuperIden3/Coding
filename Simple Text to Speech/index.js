try {
  console.clear();
  const text = document.querySelector("textarea#text");
  const _lang = document.getElementById("_lang");
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
  text.addEventListener("change", (e) => {
    speechSynthesis.cancel();
    textToRead.text = text.value;
    textToRead.pitch = Number(pitch.value);
    textToRead.lang = _lang.value;
    textToRead.rate = Number(rate.value);
    textToRead.volume = Number(volume.value);
    console.log("Event:", e);
    console.log("Speech Synthesis Utterance:", textToRead);
  });
  for (const element of document.querySelectorAll("input"))
    element.addEventListener("change", (e) => {
      speechSynthesis.cancel();
      textToRead.pitch = pitch.value;
      textToRead.lang = _lang.value;
      textToRead.rate = rate.value;
      textToRead.text = text.value;
      textToRead.volume = Number(volume.value);
      console.log("Event:", e);
      console.log("Speech Synthesis Utterance:", textToRead);
    });
  speak.addEventListener("click", (e) => {
    speechSynthesis.cancel();
    speechSynthesis.speak(textToRead);
    console.log("Event:", e);
  });
  if (
    window.confirm(
      "Do you want to view the voices that you have currently have installed in your device? "
    )
  ) {
    const formatter = new Intl.ListFormat("all", {
      style: "long",
      type: "conjunction"
    });
    const voices = speechSynthesis.getVoices();
    const arr = Array(voices.length);
    for (const i in voices) {
      const voice = voices[i];
      arr[i] = `${voice.name} (${voice.lang})`;
    }
    window.alert(`Voices: ${formatter.format(arr)}`);
  }
} catch (e) {
  console.error(e);
}
