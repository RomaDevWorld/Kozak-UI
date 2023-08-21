import Link from "next/link";
import React from "react";

const DashboardButton = () => {
  return (
    <Link href={"/dashboard/"} className=" bg-neutral-400 p-4 rounded-lg">
      Go to dashboard
    </Link>
  );
};

export default DashboardButton;
