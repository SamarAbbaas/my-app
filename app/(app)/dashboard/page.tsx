"use client";
import { ChartBarActive } from "@/components/barchart";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { type ChartConfig } from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

interface Invoice {
  TransctionId: string;
  Time: number;
  CustomerName: string;
  CustomerImage?: string;
  Status: string;
  Amount: number;
}
const invoices: Invoice[] = [
  {
    TransctionId: "INV-001",
    Time: 1,
    CustomerName: "John Doe",
    CustomerImage: "https://github.com/shadcn.png",
    Status: "Paid",
    Amount: 250.0,
  },
  {
    TransctionId: "INV-002",
    Time: 3,
    CustomerName: "Jane Smith",

    Status: "Pending",
    Amount: 150.0,
  },
  {
    TransctionId: "INV-003",
    Time: 5,
    CustomerName: "Alice Johnson",

    Status: "Overdue",
    Amount: 300.0,
  },
  {
    TransctionId: "INV-004",
    Time: 4,
    CustomerName: "Bob Brown",

    Status: "Paid",
    Amount: 200.0,
  },
];
const chart1Data = [
  { browser: "", visitors: 100, fill: "var(--chart-1)" },
  { browser: "", visitors: 150, fill: "var(--chart-2)" },
  { browser: "", visitors: 100, fill: "var(--chart-3)" },
  { browser: "", visitors: 200, fill: "var(--chart-4)" },
  { browser: "", visitors: 250, fill: "var(--chart-5)" },
];
const chart2Data = [
  { browser: "", visitors: 150, fill: "var(--muted-foreground)" },
  { browser: "", visitors: 100, fill: "var(--muted-foreground)" },
  { browser: "", visitors: 175, fill: "var(--muted-foreground)" },
  { browser: "", visitors: 125, fill: "var(--muted-foreground)" },
  { browser: "", visitors: 135, fill: "var(--muted-foreground)" },
];
const chart3Data = [
  { browser: "", visitors: 50, fill: "var(--chart-2)" },
  { browser: "", visitors: 80, fill: "var(--chart-2)" },
  { browser: "", visitors: 70, fill: "var(--chart-2)" },
  { browser: "", visitors: 150, fill: "var(--chart-2)" },
  { browser: "", visitors: 125, fill: "var(--chart-2)" },
];
const chart1Config = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;
export default function DashboardPage() {
  return (
    <>
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
          <ChartBarActive chartData={chart1Data} chartConfig={chart1Config} />
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
          <ChartBarActive chartData={chart2Data} chartConfig={chart1Config} />
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
          <ChartBarActive chartData={chart3Data} chartConfig={chart1Config} />
        </div>
        {/* card4 */}
        <div className=" flex flex-col bg-muted-foreground/20 relative p-6  rounded-lg w-full max-w-sm gap-4  overflow-hidden border border-red-500/50">
          {/* background */}
          <Icon
            icon="solar:danger-triangle-outline"
            width="90"
            height="90"
            className=" absolute  -top-2 -right-2 text-red-300 opacity-20"
          />
          {/* content */}
          <h1 className="uppercase text-red-300  text-xs">INVENTORY ALERT</h1>
          <h1 className="font-bold mb-4 h-2   text-3xl">04 Items</h1>
          <p className="flex items-center gap-2 text-muted-foreground text-sm font-bold mt-8">
            Critical <br/> stock <br/> levels reached
          </p>
          <Link
            className="text-red-300 inline-flex flex-inline gap-2 mt-4 items-center"
            href={"#"}
          >
            Restock Now <Icon icon="ep:right" width="16" height="16" />
          </Link>
        </div>
      </div>
      {/* table and quick actions */}
      <div className="flex mt-4 p-6">
        <div className="     rounded-lg w-full max-w-4xl    gap-4 flex-1 min-w-8/12 ">
          <div className="flex items-center justify-between px-4 py-2 w-70vw  ">
            <h1 className="  font-bold  ">Recent Transactions</h1>
            <Link href={"#"} className="text-primary">
              view all report
            </Link>
           </div>
           {/* Table */}
          <div className="rounded-lg overflow-hidden border border-muted-foreground/50 ">
            <Table className="p-4">
              <TableHeader className="p-4">
                <TableRow>
                  <TableHead className=" uppercase">Transctions Id</TableHead>
                  <TableHead>CUSTOMER</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead className="text-right">AMOUNT</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.TransctionId}>
                    <TableCell className="font-medium text-foreground">
                      <p>{invoice.TransctionId}</p>{" "}
                      <span className="text-muted-foreground text-xs">
                        {invoice.Time} mins ago
                      </span>
                    </TableCell>
                    <TableCell className="flex items-center gap-2">
                      {" "}
                      <Avatar>
                        <AvatarImage
                          src={invoice.CustomerImage}
                          alt="@shadcn"
                          className="grayscale rounded-xl "
                        />
                        <AvatarFallback className={"rounded-xl "}>
                          {invoice.CustomerName.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <p>{invoice.CustomerName}</p>
                    </TableCell>
                    <TableCell className="">
                      {invoice.Status === "Paid" ? (
                        <span className="text-green-500 bg-green-500/20  p-2 pt-1 pb-1 rounded-sm">
                          {invoice.Status}
                        </span>
                      ) : invoice.Status === "Pending" ? (
                        <span className="text-yellow-500 bg-yellow-500/20 p-2 pt-1 pb-1 rounded-sm">
                          {invoice.Status}
                        </span>
                      ) : invoice.Status === "Overdue" ? (
                        <span className="text-red-500 bg-red-500/30 p-2 pt-1 pb-1 rounded-sm">
                          {invoice.Status}
                        </span>
                      ) : (
                        <span>{invoice.Status}</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      ${invoice.Amount.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="flex  flex-col gap-3   px-4 py-2 w-full ">
          <h1 className="font-extrabold">Quik Actions </h1>
          {/* Link 1 */}
          <Link
            className="   flex justify-between w-full items-center gap-2 bg-muted-foreground/20 p-4 rounded-lg"
            href={"#"}
          >
            <div className="flex items-center gap-4 ">
              <div className=" rounded-sm bg-primary/20 p-2 text-primary">
                <Icon icon="ic:round-point-of-sale" width="24" height="24" />
              </div>
              <div>
                <h1 className="text-sm   font-inter font-bold">
                  Open terminal{" "}
                </h1>
                <p className="text-xs text-muted-foreground">
                  Station #04 Active{" "}
                </p>
              </div>
            </div>
            <Icon icon="formkit:right" width="7" height="16" />
          </Link>
          {/* Link 2 */}
          <Link
            className="   flex justify-between w-full items-center gap-2 bg-muted-foreground/20 p-4 rounded-lg"
            href={"#"}
          >
            <div className="flex items-center gap-4 ">
              <div className="rounded-sm  bg-primary/20 p-2 text-primary  ">
                <Icon
                  icon="fluent:tasks-app-20-regular"
                  width="20"
                  height="20"
                />{" "}
              </div>
              <div>
                <h1 className="text-sm  font-inter font-bold">
                  Adjust Inventory{" "}
                </h1>
                <p className="text-xs text-muted-foreground">
                  Quick stock update
                </p>
              </div>
            </div>
            <Icon icon="formkit:right" width="7" height="16" />
          </Link>
          {/* Link 3 */}
          <Link
            className="   flex justify-between w-full items-center gap-2 bg-muted-foreground/20 p-4 rounded-lg"
            href={"#"}
          >
            <div className="flex items-center gap-4 ">
              <div className="rounded-sm  bg-primary/20 p-2 text-primary">
                <Icon
                  icon="material-symbols-light:print-outline-rounded"
                  width="24"
                  height="24"
                />{" "}
              </div>
              <div>
                <h1 className="text-sm   font-inter font-bold">
                  Print End of Day
                </h1>
                <p className="text-xs text-muted-foreground">
                  Z-Report generation
                </p>
              </div>
            </div>
            <Icon icon="formkit:right" width="7" height="16" />
          </Link>
          <div className="flex  flex-col  w-full  gap-6 bg-primary/5 p-4 rounded-2xl border-[0.5] border-primary/50">
            <div className="flex items-center gap-4 ">
              <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse mt-4"></div>
              <p className="   items-center uppercase text-green-400 mt-4 ">
                System ONLINE
              </p>
            </div>
            <p className="mt-4 text-muted-foreground ">Current load</p>
            <Progress value={40} className="w-[60%] mb-4" />
            <p className="text-muted-foreground text-xs">
              Syncing to Cloud Engine...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
