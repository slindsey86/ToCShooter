function finishGame(thescore) {
  const data = { type: 'FINISH_MINIGAME', payload: { score: thescore } };
  window.parent.postMessage(data, '*');
}