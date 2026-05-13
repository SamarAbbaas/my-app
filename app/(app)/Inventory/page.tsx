"use client";

import { useState } from "react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import productData from "./data.json";

interface Product {
  id: number;
  name: string;
  span: string;
  ProductImage?: string;
  sku: string;
  price: number;
  stockLevel: number;
  Category?: string;
  Action?: string;
}

export default function InventoryPage() {
  const [products, setProducts] = useState<Product[]>(productData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.Category?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Pagination
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newProduct: Product = {
      id: products.length + 1,
      name: formData.get("name") as string,
      span: formData.get("span") as string,
      sku: formData.get("sku") as string,
      price: parseFloat(formData.get("price") as string),
      stockLevel: parseInt(formData.get("stockLevel") as string),
      Category: formData.get("category") as string,
      Action: " ",
    };
    setProducts([newProduct, ...products]);
  };
  return (
    <>
      <div className="flex flex-col  p-4 ml-4  max-w-600 overflow-x-hidden">
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
          <div className="flex gap-4 items-center">
            {isFilterOpen && (
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-48 bg-transparent"
              />
            )}
            <Button 
              className="flex gap-1 text-white bg-muted-foreground/20 p-6"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              {" "}
              <Icon icon="mynaui:filter" width="24" height="24" />
              Filter
            </Button>
            <Dialog>
              <DialogTrigger className="bg-primary rounded p-3  flex text-secondary-foreground font-bold items-center gap-1">
                  <Icon
                    icon="material-symbols-light:add-circle-outline-rounded"
                    width="24"
                    height="24"
                  />
                  Add Product
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-[#1a1a1a] text-white">
                <DialogHeader>
                  <DialogTitle>Add New Product</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddProduct} className="flex flex-col gap-4">
                  <Input name="name" placeholder="Product Name" required className="bg-transparent" />
                  <Input name="span" placeholder="Variant (e.g. Blue, 128GB)" required className="bg-transparent" />
                  <Input name="sku" placeholder="SKU" required className="bg-transparent" />
                  <Input name="price" placeholder="Price" type="number" step="0.01" required className="bg-transparent" />
                  <Input name="stockLevel" placeholder="Stock Level" type="number" required className="bg-transparent" />
                  <Input name="category" placeholder="Category" required className="bg-transparent" />
                  <Button type="submit" className="w-full bg-primary text-secondary-foreground font-bold font-inter mt-2">Create Product</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 justify-between mr-24 p-6   ">
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
         <div className=" bg-muted-foreground/20 rounded-lg overflow-hidden border border-muted-foreground/50 ">
          <Table className="p-4">
          <TableHeader className="p-4">
            <TableRow >
              <TableHead>PRODUCT</TableHead>
              <TableHead>SKU / ID</TableHead>
              <TableHead>PRICE</TableHead>
              <TableHead>CATEGORY</TableHead>
              <TableHead>STOCKLEVEL</TableHead>
              <TableHead>ACTION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="flex items-center gap-2">
                  {" "}
                  <Avatar>
                    <AvatarImage
                      src={product.ProductImage}
                      alt="@shadcn"
                      className="grayscale rounded-xl "
                    />
                    <AvatarFallback className={"rounded-xl "}>
                      {product.name.charAt(1).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <h1 className="flex flex-col ">
                    {product.name}{" "}
                    <span className="text-xs text-muted-foreground">
                      {product.span}
                    </span>
                  </h1>
                </TableCell>
                <TableCell>{product.sku}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>

                <TableCell>{product.stockLevel}</TableCell>
                <TableCell>{product.Category}</TableCell>
                <TableCell>{product.Action}</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
        <div className="flex justify-between p-4">
          <div>
            <h1 className="text-muted-foreground">
              Showing <span className="text-white">{totalItems === 0 ? 0 : startIndex + 1}-{Math.min(startIndex + itemsPerPage, totalItems)}</span> of <span className="text-white">{totalItems}</span> products
            </h1> 
          </div>
          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(currentPage - 1);
                    }} 
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink 
                      href="#" 
                      isActive={currentPage === index + 1}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(index + 1);
                      }}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(currentPage + 1);
                    }} 
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
         </div>
        
        <div className="border border-muted-foreground/50  bg-muted-foreground/20 rounded-lg p-6 mt-6">
          <div className="flex items-center gap-4  ">
            <div className="bg-primary/10 p-2.5 rounded-xl border border-primary/20">
              <Icon
                icon="ph:sparkle-bold"
                className="text-primary"
                width="22"
              />
            </div>
            <div className="flex justify-between w-full"> 
              <div>
              <h4 className="text-sm font-bold">Inventory Intelligence</h4>
              <p className="text-xs text-muted-foreground">
                AI suggests restocking 4 items based on next week s sales
                forecast.
              </p>
            </div>
          </div>
          <Link
            href="/inventory/recommendationeded"
            className="text-xs font-bold text-primary flex items-center gap-2  "
          >
            Review Recommendations <ArrowRightIcon size={14} />
          </Link></div>
        </div>
      </div>
    </>
  );
}
