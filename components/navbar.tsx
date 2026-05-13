"use client";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
// import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import ThemeToggle from "./theme-toggle";
// import { Dialog } from "@base-ui/react";
export default function Navbar() {
  return (
    <div className="flex relative gap-20 bg-background overflow-hidden p-6 justify-between items-center">
      <div></div>
      <div className="flex-1 mx-10">
        <InputGroup className="w-full pl-2">
          <Icon icon="material-symbols-light:search" width="24" height="24" />
          <InputGroupInput placeholder="Search transactions,items or SKU...." />
          <InputGroupAddon align="inline-end"></InputGroupAddon>
        </InputGroup>
      </div>

      <div className="flex gap-4   right-10 top-8">
        <ThemeToggle />
        <Dialog>
          <DialogTrigger
            render={
              <Button variant="outline">
                <Icon icon="iwwa:alarm" width="40" height="40" />
              </Button>
            }
          />
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>No Close Button</DialogTitle>
              <DialogDescription>
                This dialog doesn&apos;t have a close button in the top-right
                corner.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger
            render={
              <Button variant="outline">
                {" "}
                <Icon icon="lets-icons:question-light" width="24" height="24" />
              </Button>
            }
          />
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>No Close Button</DialogTitle>
              <DialogDescription>
                This dialog doesn&apos;t have a close button in the top-right
                corner.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Button>
          <Icon
            icon="material-symbols-light:add-rounded"
            width="44"
            height="24"
          />
          New Sale
        </Button>
      </div>
    </div>
  );
}
