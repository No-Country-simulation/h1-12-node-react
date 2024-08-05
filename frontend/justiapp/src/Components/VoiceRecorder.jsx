import React, { useState, useRef, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import RecordRTC from "recordrtc";

const VoiceRecorder = () => {
  const { auth } = useContext(AuthContext); // Obtén el token del contexto de autenticación
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [recorder, setRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const audioRef = useRef();

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const options = {
      type: "audio",
      mimeType: "audio/m4a",
    };
    const recorder = new RecordRTC(stream, options);

    recorder.startRecording();
    setRecorder(recorder);
    setIsRecording(true);
  };

  const stopRecording = () => {
    recorder.stopRecording(() => {
      const blob = recorder.getBlob();
      const url = URL.createObjectURL(blob);
      setAudioBlob(blob);
      setAudioURL(url);
      setIsRecording(false);
    });
  };

  const resetRecording = () => {
    setIsRecording(false);
    setAudioURL(null);
    setAudioBlob(null);
  };

  const transcribeAudio = async () => {
    if (!audioBlob) {
      console.log("No hay audio para transcribir");
      return;
    }

    const formData = new FormData();
    formData.append("file", audioBlob, "recording.m4a");

    try {
      const result = await fetch(
        "https://h1-12-node-react.onrender.com/api/ai/transcribe", // URL corregida
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
          body: formData,
        }
      );
      console.log(result.json);
      if (result.ok) {
        const responseJson = await result.json();
        console.log("Transcripción recibida:", responseJson);
      } else {
        console.error("Error al enviar el archivo:", result.statusText);
      }
    } catch (error) {
      console.error("Error al enviar el archivo:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-12 px-4 py-3.5 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-lg inline-flex items-center gap-2">
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className="text-white text-base font-semibold font-['Open Sans'] leading-tight tracking-tight"
        >
          {isRecording ? "Detener Grabación" : "Iniciar Grabación"}
        </button>
      </div>
      <div className="h-12 px-4 py-3.5 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-lg inline-flex items-center gap-2">
        <button
          onClick={resetRecording}
          className="text-white text-base font-semibold font-['Open Sans'] leading-tight tracking-tight"
        >
          Resetear Grabación
        </button>
      </div>
      {audioURL && (
        <div>
          <audio
            ref={audioRef}
            controls
            src={audioURL}
            className="mt-4"
          ></audio>
          <div className="h-12 px-4 py-3.5 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-lg inline-flex items-center gap-2 mt-4">
            <button
              onClick={transcribeAudio}
              className="text-white text-base font-semibold font-['Open Sans'] leading-tight tracking-tight"
            >
              Transcribir
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder;
