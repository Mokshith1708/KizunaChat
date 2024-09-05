import React from "react";
import { format, isToday, isYesterday } from "date-fns";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  fromCurrentUser: boolean;
  senderImage: string;
  senderName: string;
  lastByUser: boolean;
  content: string[];
  createdAt: number;
  seen?: React.ReactNode;
  type: string;
};

const Message = ({
  fromCurrentUser,
  senderImage,
  senderName,
  lastByUser,
  content,
  createdAt,
  seen,
  type,
}: Props) => {
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    if (isToday(date)) {
      return format(date, "p"); // Just time
    } else if (isYesterday(date)) {
      return `Yesterday, ${format(date, "p")}`; // Yesterday with time
    } else {
      return `${format(date, "PPP")}, ${format(date, "p")}`; // Full date with time
    }
  };

  return (
    <div className={cn("flex items-start", { "justify-end": fromCurrentUser })}>
      <div
        className={cn("flex flex-col w-full mx-2", {
          "order-1 items-end": fromCurrentUser,
          "order-2 items-start": !fromCurrentUser,
        })}
      >
        <div
          className={cn("px-4 py-2 rounded-lg max-w-[70%] relative", {
            "bg-blue-500 text-white": fromCurrentUser,
            "bg-red-400 text-white": !fromCurrentUser,
            "rounded-br-none": !lastByUser && fromCurrentUser,
            "rounded-bl-none": !lastByUser && !fromCurrentUser,
            "shadow-md": true,
          })}
        >
          <p
            className={cn("text-xs font-medium mb-1", {
              "text-white text-right": fromCurrentUser,
              "text-white text-left": !fromCurrentUser,
            })}
          >
            {formatTime(createdAt)}
          </p>

          <p className={cn("text-base whitespace-pre-wrap break-words")}>
            {type === "text" ? content.join(" ") : null}
          </p>
        </div>
        {seen}
      </div>

      <Avatar
        className={cn("relative w-8 h-8 ml-2", {
          "order-2": fromCurrentUser,
          "order-1": !fromCurrentUser,
          invisible: lastByUser,
        })}
      >
        <AvatarImage src={senderImage} />
        <AvatarFallback>{senderName.substring(0, 1)}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Message;
