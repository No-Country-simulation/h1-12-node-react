import React, { useState, useRef, useEffect } from "react";

const VoiceRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [time, setTime] = useState(0);
  const mediaRecorderRef = useRef(null);
  const [stream, setStream] = useState(null);
  const timerRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    if (progressRef.current && recording) {
      const updateProgress = () => {
        const percentage = (time / 60) * 100; // Ejemplo de duración de 60 segundos
        progressRef.current.style.width = `${percentage}%`;
      };
      updateProgress();
      const interval = setInterval(updateProgress, 1000);
      return () => clearInterval(interval);
    }
  }, [recording, time]);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((userStream) => {
        setStream(userStream);
        const recorder = new MediaRecorder(userStream);
        mediaRecorderRef.current = recorder;

        recorder.ondataavailable = (event) => {
          const audioBlob = event.data;
          const url = URL.createObjectURL(audioBlob);
          setAudioURL(url);
        };

        recorder.start();
        setRecording(true);
        setTime(0);
        timerRef.current = setInterval(() => setTime((prev) => prev + 1), 1000);
      })
      .catch((error) => {
        console.error("Error accessing audio media:", error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }

    clearInterval(timerRef.current);
  };

  const resetRecording = () => {
    stopRecording();
    setAudioURL(null);
    setTime(0);
    setRecording(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const transcribeAudio = async () => {
    if (!audioURL) {
      console.log("No audio to transcribe");
      return;
    }

    console.log("Enviando archivo al backend...");
    // Simulación de envío
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Archivo enviado");
  };

  return (
    <div className="w-[400px] h-[300px] flex-col justify-center items-center gap-4 inline-flex">
      <div className="flex flex-col items-center gap-4">
        <div
          className={`px-4 py-2 rounded-lg text-white font-bold cursor-pointer ${
            recording ? "bg-red-600" : "bg-blue-600"
          }`}
          onClick={recording ? stopRecording : startRecording}
        >
          {recording ? "Detener Grabación" : "Iniciar Grabación"}
        </div>

        {audioURL && (
          <div className="flex flex-col items-center gap-4">
            <audio controls src={audioURL} className="w-full max-w-lg" />
            <div className="text-center text-gray-600">
              Tiempo de grabación: {formatTime(time)}
            </div>
          </div>
        )}

        <div
          className="relative w-full bg-gray-200 rounded-full mt-4"
          style={{ height: "8px" }}
        >
          <div
            ref={progressRef}
            className="absolute top-0 left-0 bg-blue-600 rounded-full h-full"
          ></div>
        </div>

        <div className="flex gap-4 mt-4">
          {audioURL && (
            <button
              className="h-12 px-4 py-3.5 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-lg flex items-center gap-2 text-white font-semibold"
              onClick={transcribeAudio}
            >
              <div className="text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                Transcribir
              </div>
              <div className="w-5 h-5 relative" />
            </button>
          )}

          <button
            className="h-12 px-4 py-3.5 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-lg flex items-center gap-2 text-white font-semibold"
            onClick={resetRecording}
          >
            <div className="text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
              Resetear
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceRecorder;
