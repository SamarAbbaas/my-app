"use client";
import { Icon } from "@iconify/react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function LoginPage() {
  return (
    <div className="flex relative  flex-col h-screen w-screen bg-background overflow-hidden">
      {/* background */}
      <div className="absolute top-[50vh] right-[50vw] h-screen w-screen bg-primary opacity-10 rounded-2xl blur-3xl"></div>
      <div className="absolute bottom-[50vh] left-[50vw] h-screen w-screen bg-primary opacity-10 rounded-2xl blur-3xl"></div>
      {/* content */}
      <div className="flex h-full w-full justify-center flex-col items-center  font-inter">
        <div className="bg-primary p-6 rounded-xl ">
          <Icon
            icon="streamline:flash-2-solid"
            width="24"
            height="24 "
            className="bg-primary "
          />
        </div>
        <div>
          <h1 className="  flex justify-center flex-col items-center text-primary font-inter letter-spacing-tighter mt-8">
            ELECTRIC POS
          </h1>
          <p className="text-muted-foreground ">V2.0 PRECISION TERMINAL</p>
        </div>
        <div className="bg-muted-foreground/50 p-8 rounded-lg w-full max-w-md mt-8">
          <div>
            <h1 className="text-2xl ">System Login</h1>
            <p className="text-muted-foreground">
              Authorized personnel access only
            </p>
          </div>
          <div className="mt-4 ">
            <label className="font-semibold ">USERNAME</label>
            <InputGroup className="mb-8 mt-8 bg-none font-inter text-muted-foreground border-0 border-b rounded-none  focus:ring-0  focus:border-0 focus:shadow-none focus:ring-offset-0 focus:ring-offset-transparent">
              <InputGroupInput placeholder="operator_id" />
              <InputGroupAddon align="inline-end">
                <Icon icon="glyphs:user-duo" width="80" height="80" />
              </InputGroupAddon>
            </InputGroup>
            <label>SECURITY KEY</label>
            <InputGroup className="  mt-8 font-inter text-muted-foreground border-0 border-b rounded-none  focus:ring-0  focus:border-0 focus:shadow-none focus:ring-offset-0 focus:ring-offset-transparent">
              <InputGroupInput
                id="inline-end-input"
                type="password"
                placeholder="........."
              />
              <InputGroupAddon align="inline-end">
                <Icon icon="arcticons:passwords" width="48" height="48" />
              </InputGroupAddon>
            </InputGroup>

            <Link
              href="/dashboard"
              className="group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground hover:bg-primary/80 h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 w-full mt-6"
            >
              {" "}
              INITIALIZE SESSION <ArrowRightIcon />
            </Link>
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-8 ">
          <Icon
            icon="ri:question-line"
            width="24"
            height="24"
            className="text-primary"
          />{" "}
          <p>Need help? Contact system administrator</p>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full">
        <div className="flex justify-end p-3 gap-3 items-center text-muted-foreground">
          <div className="h-3 w-3 bg-primary rounded-full animate-pulse"></div>
          <p className="flex gap-2 items-center ">SERVER: ONLINE</p>
          <p>ENCRYPTED NODE: TLS 1.3</p>
        </div>
      </footer>
    </div>
  );
}
