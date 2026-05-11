"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
export default function DashboardPage() {
  return (
    <div className="flex p-4  w-full justify-around gap-4 font-inter ">
      {/* card1 */}
      <div className=" flex flex-col bg-muted-foreground/20  relative p-6 rounded-lg w-full max-w-sm gap-4 ">
        {/* background */}
        <Icon
          icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"
          width="50"
          height="50"
          className="absolute top-0 right-4 text-primary opacity-20"
        />
        {/* content */}
        <h1 className="uppercase text-muted-foreground  text-xs">
          Total sales{" "}
        </h1>
        <h1 className="font-bold mb-4 h-2   text-3xl">$12,482.00</h1>
        <p className="flex items-center gap-1 text-green-500 text-xs">
          <Icon
            icon="mynaui:arrow-up"
            width="24"
            height="24"
            className="rotate-45"
          />{" "}
          +14.2% from yesterday
        </p>
      </div>
      {/* card2 */}
      <div className=" flex flex-col bg-muted-foreground/20 p-6 rounded-lg w-full max-w-sm gap-4 ">
        <h1 className="uppercase text-muted-foreground  text-xs">
          ACTIVE ORDERS
        </h1>
        <h1 className="font-bold mb-4 h-2   text-3xl">142</h1>
        <p className="flex items-center gap-1 text-muted-foreground text-xs">
          <Icon icon="gravity-ui:clock" width="16" height="16" /> Average 4.2m
          prep time
        </p>
      </div>
      {/* card3 */}
      <div className=" flex flex-col bg-muted-foreground/20 p-6 rounded-lg w-full max-w-sm gap-4 ">
        <h1 className="uppercase text-muted-foreground  text-xs">
          NEW CUSTOMERS
        </h1>
        <h1 className="font-bold mb-4 h-2   text-3xl">28</h1>
        <p className="flex items-center gap-1 text-primary text-xs">
          <Icon
            icon="material-symbols:person-add-outline"
            width="16"
            height="16"
          />{" "}
          84% retention rate
        </p>
      </div>
      {/* card4 */}
      <div className=" flex flex-col bg-muted-foreground/20 relative p-6  rounded-lg w-full max-w-sm gap-4  overflow-hidden border border-red-500/50">
        {/* background */}
        <Icon icon="solar:danger-triangle-outline" width="90" height="90" className=" absolute  -top-2 -right-2 text-red-300 opacity-20" />
        {/* content */}
        <h1 className="uppercase text-red-300  text-xs">INVENTORY ALERT</h1>
        <h1 className="font-bold mb-4 h-2   text-3xl">04 Items</h1>
        <p className="flex items-center gap-1 text-muted-foreground text-xs">
          Critical stock levels reached
        </p>
        <Link
          className="text-red-300 inline-flex items-center gap-2"
          href={"#"}
        >
          Restock Now <Icon icon="ep:right" width="16" height="16" />
        </Link>
      </div>
    </div>
  );
}
