"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function InventoryPage() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link href="#" className="uppercase">Inventory</Link>} />
        </BreadcrumbItem>
        <BreadcrumbSeparator >
        <Icon icon="heroicons:slash-solid" width="24" height="24" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link href="#Products " className="uppercase text-primary"> Products</Link>} />
        </BreadcrumbItem>
      
        
      </BreadcrumbList>
    </Breadcrumb>
   <div className="flex justify-between items-center p-4">
     <h1 className="font-bold text-3xl">Product Catalog</h1>
     <div className="flex gap-4">
      <button className="flex gap-1 mt-2 bg-muted-foreground/20 p-4"> <Icon icon="mynaui:filter" width="24" height="24" />Filter</button>
    <button className="bg-primary mr-4 rounded p-4  flex text-black font-bold"><Icon icon="material-symbols-light:add-rounded" width="24" height="24" />Add Product</button>
     </div>
   </div>
      </div>
    </>
  );
}
