import { exportTraceState } from "next/dist/trace";
import React from "react";
import DesktopNav from "./nav/DesktopNav";
import MobileNav from "./nav/MobileNav";

type Props = React.PropsWithChildren<{}>;

const SidebarWrapper = ({ children }: Props) => {
  return (
    <div className="h-full w-full  flex flex-col lg:flex-row gap-0  bg-gradient-to-b from-slackPurple-dark1 to-slackPurple-dark5 text-white p-5">
      <MobileNav />
      <DesktopNav />
      <main className="h-[calc(100%-80px)] lg:h-full w-full flex gap-4">
        {children}
      </main>
    </div>
  );
};

export default SidebarWrapper;
