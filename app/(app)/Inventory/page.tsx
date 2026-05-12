"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
// import { Table } from "@/components/ui/table";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface Product {
  id: number;
  name: string;
  span:string;
    ProductImage?: string;
  sku: string;
  price: number;
  stockLevel: number;
  Action?: string;
}
const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    span:"Titanium Blue, 256GB",
    ProductImage: "https://example.com/images/headphones.jpg",
    sku: "WH-1000XM4",
    price: 349.99,
    stockLevel: 25,
    Action:" ",
  },
  {
    id: 2,
    name: "Smartphone",
    span:"Graphite, 128GB",
      ProductImage: "https://example.com/images/smartphone.jpg",
    sku: "SM-G991B",
    price: 799.99,
    stockLevel: 10,
     Action:" ",
  },
  {
    id: 3,
    name: "Laptop",
    span:"Silver, 16GB RAM",
      ProductImage: "https://example.com/images/laptop.jpg",
    sku: "XPS-13",
    price: 999.99,
    stockLevel: 5,
     Action:" ",
  },
  {
    id: 4,
    name: "Smartwatch",
    span:"Ocean Band ,Orange",
    ProductImage: "https://example.com/images/smartwatch.jpg",
    sku: "SW-5000",
    price: 199.99,
    stockLevel: 15,
     Action:" ",
  }
];  

export default function InventoryPage() {
  return (
    <>
      <div className="flex flex-col  p-4 ml-4  overflow-hidden">
        <div className=" ">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  render={
                    <Link href="#" className="uppercase">
                      Inventory
                    </Link>
                  }
                />
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Icon icon="heroicons:slash-solid" width="24" height="24" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink
                  render={
                    <Link href="#Products " className="uppercase text-primary">
                      {" "}
                      Products
                    </Link>
                  }
                />
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex justify-between items-center   mb-4">
          <h1 className="font-bold text-3xl">Product Catalog</h1>
          <div className="flex gap-4">
            <button className="flex gap-1 mt-2 bg-muted-foreground/20 p-4">
              {" "}
              <Icon icon="mynaui:filter" width="24" height="24" />
              Filter
            </button>
            <button className="bg-primary mr-4 rounded p-4  flex text-black font-bold">
              <Icon
                icon="material-symbols-light:add-rounded"
                width="24"
                height="24"
              />
              Add Product
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 justify-between mr-24 p-6 min-w-screen  ">
          <div className="relative bg-[#1a1a1a]  border-primary w-60 p-8 rounded-xl overflow-hidden shadow-lg border-l-[6px]">
            <p className="text-muted-foreground  font-inter  font-bold">
              TOTAL ITEMS
            </p>
            <h1 className="text-2xl font-extrabold">1,284</h1>
          </div>

          <div className="relative bg-[#1a1a1a]  border-yellow-300 w-60 p-8 rounded-xl overflow-hidden shadow-lg border-l-[6px]">
            <p className="text-muted-foreground  font-inter  font-bold">
              LOW STOCK
            </p>
            <h1 className="text-2xl text-yellow-300 font-extrabold">12</h1>
          </div>

          <div className="relative bg-[#1a1a1a]  border-[#ff64ab] w-60 p-8 rounded-xl overflow-hidden shadow-lg border-l-[6px]">
            <p className="text-muted-foreground  font-inter  font-bold">
              OUT OF STOCK
            </p>
            <h1 className="text-2xl text-[#ffb4ab] font-extrabold">03</h1>
          </div>

          <div className="relative bg-[#1a1a1a]   border-[#c1c8ca] w-60 p-8 rounded-xl overflow-hidden shadow-lg border-l-[6px]">
            <p className="text-muted-foreground  font-inter  font-bold">
              TOTAL VALUATION
            </p>
            <h1 className="text-2xl  text-[#c1c8ca] font-extrabold">
              $42,890.50
            </h1>
          </div>
        </div>
         <Table className="p-4">
        <TableHeader className="p-4">
          <TableRow>
            <TableHead >PRODUCT</TableHead>
            <TableHead>SKU / ID</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead  >CATEGORY</TableHead>
            <TableHead className="flex flex-col" >STOCKLEVEL</TableHead>
            <TableHead className="flex flex-col" >ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
           {products.map((product) => (
            
                            <TableRow key={product.name}>
                              <TableCell className="flex items-center gap-2">
                      {" "}
                      <Avatar>
                        <AvatarImage
                          src={product.ProductImage}
                          alt="@shadcn"
                          className="grayscale rounded-xl "
                        />
                        <AvatarFallback className={"rounded-xl "}>
                          {product.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <p>{product.name}</p>
                    </TableCell>
                              <TableCell>{product.sku}</TableCell>
                              <TableCell>${product.price.toFixed(2)}</TableCell>
                              {/* <TableCell>{product.sku}</TableCell> */}
                              <TableCell>{product.stockLevel}</TableCell>
                            <TableCell>{product.Action}</TableCell>
                              </TableRow>
                        ))}
          </TableBody>
      </Table>
      </div>
      
    </>
  );
}
