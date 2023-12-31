// Library imports
import { useRecoilState } from "recoil";

// components
import { Sidebar } from "@excalidraw/excalidraw";

// hooks
import { useStore } from "@/hooks";

// icons
import { BiMessageDetail } from "react-icons/bi";


export const ChatboxTrigger = () => {
  const {chatDrawerAtom} = useStore();
  const [showChatBox, setShowChatBox] = useRecoilState(chatDrawerAtom);

  return (
    <>
   
      <Sidebar.Trigger
        name="chat"
        className="flex gap-2 items-center bg-accent text-contrast-dark rounded-lg p-3"
        title={"Open Chat"}
        icon={<BiMessageDetail />}
        style={{ backgroundColor: "rgb(168, 165, 255)", color: "black" }}
        onToggle={() => setShowChatBox(!showChatBox)}>
        Chats
      </Sidebar.Trigger>
    </>
  );
};
