"use client";

import { Footer } from "flowbite-react";

export function FooterComponent() {
  return (
<Footer container className="bg-black text-white rounded-none">
<div className="w-full text-center">
       
        <Footer.Divider className="border-gray-600" />
        <Footer.Copyright href="#" by="Climate advocates" year={2024} />
      </div>
    </Footer>
  );
}
