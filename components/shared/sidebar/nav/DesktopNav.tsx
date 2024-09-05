"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ChatBot from "@/components/ui/Chatbot";
import { ThemeToggle } from "@/components/ui/theme/theme-toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useNavigation } from "@/hooks/useNavigation";
import { UserButton } from "@clerk/nextjs";
import Link from "next/dist/client/link";

const DesktopNav = () => {
    const paths = useNavigation();
  return (
    <Card className="hidden lg:flex lg:flex-col lg:justify-between lg:items-center lg:h-full lg:w-16 lg:px-2 lg:py-4 border-2 bg-grey-gradient border-white shadow-white-lg hover:border-yellow-500 hover:shadow-white-2xl transition-shadow duration-300 ease-in-out rounded-r-none">
        <nav>
            <ul className="flex flex-col items-center gap-4">
                {paths.map((path, id) => (
                    <li key={id} className="relative">
                        <Link href={path.href}>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button size="icon" variant={path.active ? "default" : "outline"}>
                                        {path.icon}
                                    </Button>
                                    {path.count ? <Badge className="absolute left-6 bottom-7 px-2">{path.count}</Badge> : null}
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{path.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        <div className="flex flex-col items-center gap-4">
            <ChatBot />
            {/* <ThemeToggle /> */}
            <UserButton />
        </div>
    </Card>
  )
}

export default DesktopNav;
