"use client";

import { Footer } from "flowbite-react";

export function FooterComponent() {
  return (
    <Footer container className="bg-black text-white">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            // href="#"
            src="/images/Logo.png"
            alt="Climate advocates logo"
            name="Climate Advocates"
            className="h-16 w-16"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider className="border-gray-600" />
        <Footer.Copyright href="#" by="Climate advocates" year={2024} />
      </div>
    </Footer>
  );
}
