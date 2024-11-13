
import React from "react";
import { ExternalLink, Menu } from "lucide-react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LadingPageNavBar = () => {
  return (
    <div className="shadow-sm w-full sticky top-0  bg-white dark:bg-gray-900 z-[9999]">
      <div className="w-full flex items-center justify-center h-auto bg-black">
        <div className="max-w-6xl mx-auto py-2">
          <p className="text-white text-sm">
            <b>Subcribe to the channel 🙏</b>! Boost your AORA with AORA.ai
            Resume Course out{" "}
            <a className="inline-flex items-center gap-1 font-bold text-primary">
              AORA.ai Course
              <ExternalLink size="14px" />
            </a>
          </p>
        </div>
      </div>
      <div className="w-full mx-auto max-w-7xl p-3 px-5 flex items-center justify-between ">
        <div className="flex items-center flex-1 gap-9">
          <div>
        <div className="text-3xl font-semibold flex items-center gap-x-3">
        <Menu className="w-8 h-8" />
        <Image
          alt="logo"
          src="/opal-logo.svg"
          width={40}
          height={40}
        />
        
        <h5 className="font-black text-lg text-primary">AORA.Ai</h5>

      </div>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex items-center gap-5 text-[14px] font-medium text-black dark:text-white">
              <li>
                <Link href="#">AI Features</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Resources</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href={"/auth/sign-in"}>
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href={"/auth/sign-up"}>
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
  
};

export default LadingPageNavBar;
