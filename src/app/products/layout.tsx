import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Product | ShopMe",
    default: "Products",
    template: "",
  },
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
