export default {
  startRecognition: async () => {
    // Definimos la función que le enviará un mensaje al navegador
    await postWindowMessage(
      'start_speech_recognition', 
      'window' // 'window' significa que enviamos el mensaje al navegador
    );
  }
}