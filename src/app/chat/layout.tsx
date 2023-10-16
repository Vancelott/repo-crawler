import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Chat from "./page";
import createChat from "../actions/createChat";
import GetMessages from "../actions/getMessages";
import ChatNav from "./components/chatNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// async function createChatReq(userInput: string, aiInput: string) {
//   "use server";

//   const create = await createChat(userInput, aiInput);
// }

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await GetMessages("1234");

  console.log(messages);

  return (
    <div>
      <ChatNav />
      <Chat dbMessages={messages!} />
      {/* {children} */}
    </div>
  );
}
