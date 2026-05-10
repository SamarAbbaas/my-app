"use client";
import { Icon } from "@iconify/react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
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
            <label className="font-semibold " >USERNAME</label>
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
            <Button className="w-full mt-6 ">
              INITIALIZE SESSION
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-8 ">
<Icon icon="ri:question-line" width="24" height="24" className="text-primary"/>          <p>
            Need help? Contact system administrator
          </p>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full">
        <div className="flex justify-end p-3 gap-3 items-center text-muted-foreground">
          <p className="flex gap-2 items-center ">
            <div className="h-3 w-3 bg-primary rounded-full animate-pulse"></div>SERVER:
            ONLINE
          </p>
          <p>ENCRYPTED NODE: TLS 1.3</p>
        </div>
      </footer>
    </div>
  );
}
