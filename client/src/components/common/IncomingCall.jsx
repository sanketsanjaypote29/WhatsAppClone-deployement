import { useStateProvider } from "@/context/StateContext";
import React from "react";
import Image from "next/image";
import { reducerCases } from "@/context/constants";


function IncomingCall() {
  const [{ incomingVoiceCall, socket }, dispatch] = useStateProvider();
  const acceptCall = () => {
    const call = incomingVoiceCall;
    dispatch({
      type: reducerCases.SET_VOICE_CALL,
      voiceCall: {
        ...incomingVoiceCall,
        type: "in-coming",
      },
    });
    socket.current.emit("accept-incoming-call", { id: incomingVoiceCall.id });
    dispatch({
      type: reducerCases.SET_INCOMING_VOICE_CALL,
      incomingVoiceCall: undefined,
    });
  };
  const rejectCall = () => {
    socket.current.emit("reject-voice-call", { from: incomingVoiceCall.id });
    dispatch({ type: reducerCases.END_CALL });
  };

  return (
    <div className="h-24 w-80 fixed bottom-8 mb-0 right-6 z-50 rounded-sm flex gap-5 items-center  justify-center p-4  bg-conversation-panel-background text-white drop-shadow-2xl border-icon-green border-2 py-14">
      <div>
        <Image
          src={incomingVoiceCall.profilePicture}
          alt="avatar"
          width={70}
          height={70}
          className="rounded-full"
        />
      </div>
      <div>{incomingVoiceCall.name}</div>
      <div className="text-xs">Incoming Voice Call</div>
      <div className=" gap-2 mt-2 ">
        <button
          className="bg-red-500 p-1 px-3 text-sm rounded-full"
          onClick={rejectCall}>
          Reject
        </button>
        <button
          className="bg-green-500 p-1 px-3 text-sm rounded-full"
          onClick={acceptCall}>
          Accept
        </button>
      </div>
    </div>
  );
}

export default IncomingCall;
