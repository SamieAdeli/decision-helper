// // ==============================
// // Sound System (Tone.js)
// // ==============================

// let clickSynth = null;
// let isAudioReady = false;

// export function initSounds() {
//   // Tone.js باید بعد از تعامل کاربر شروع شود
//   document.body.addEventListener('click', async () => {
//     if (!isAudioReady) {
//       await Tone.start();
//       createSynths();
//       isAudioReady = true;
//       console.log('Audio ready');
//     }
//   }, { once: true });
// }

// function createSynths() {
//   // صدای کلیک نرم و لوکس
//   clickSynth = new Tone.MembraneSynth({
//     pitchDecay: 0.01,
//     octaves: 2,
//     oscillator: { type: 'sine' },
//     envelope: {
//       attack: 0.001,
//       decay: 0.15,
//       sustain: 0,
//       release: 0.1
//     }
//   }).toDestination();

//   clickSynth.volume.value = -18; // صدای آرام
// }

// export function playClick() {
//   if (isAudioReady && clickSynth) {
//     clickSynth.triggerAttackRelease('C2', '32n');
//   }
// }