"use client";

import { trpc } from "@/app/_trpc/client";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import { ChevronLeft, Loader2, XCircle } from "lucide-react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { ChatContextProvider } from "./ChatContext";

interface ChatWrapperProps {
  fileId: string;
}

const ChatWrapper = ({ fileId }: ChatWrapperProps) => {
  console.log("fileId", fileId);

  const { data, isLoading } = trpc.getFileUploadStatus.useQuery(
    { 
      fileId,
    },
    {
      refetchInterval: (data) => data?.status === "SUCCESS" || data?.status === "FAILED" ? false : 500
    }
  );

  if (isLoading)
    return (
      <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
        <div className="flex-1 flex justify-center items-center flex-col mb-28">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 text-orange-500 animate-spin" />
            <h3 className="font-semibold text-xl">Загрузка...</h3>
            <p className="text-zinc-500 text-sm">Подготовка PDF файла.</p>
          </div>
        </div>
      </div>
    );

  if (data?.status === "PROCESSING")
    return (
      <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
        <div className="flex-1 flex justify-center items-center flex-col mb-28">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 text-orange-500 animate-spin" />
            <h3 className="font-semibold text-xl">Обработка файла...</h3>
          </div>
        </div>
      </div>
    );

  if (data?.status === "FAILED")
    return (
      <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
        <div className="flex-1 flex justify-center items-center flex-col mb-28">
          <div className="flex flex-col items-center gap-2">
            <XCircle className="h-8 w-8 text-red-500" />
            <h3 className="font-semibold text-xl">
              Слишко много страниц в файле
            </h3>
          </div>
          <Link
            href="/dashboard"
            className={buttonVariants({
              variant: "secondary",
              className: "mt-4",
            })}
          >
            <ChevronLeft className="h-3 w-3 mr-1.5" />
            Назад
          </Link>
        </div>
      </div>
    );

  return (
    <ChatContextProvider fileId={fileId}>
      <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
        <div className="flex-1 flex justify-center items-center flex-col mb-28">
          <Messages fileId={fileId} />
        </div>

        <ChatInput isDisabled />
      </div>
    </ChatContextProvider>
  );
};

export default ChatWrapper;
