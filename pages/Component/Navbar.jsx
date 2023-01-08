// import { Link } from '@chakra-ui/react'
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link href={"/"}>Home</Link>
        <Link href={"/Component/Profile"}>profile</Link>
        <Link href={"/Component/Project"}>project</Link>
        {/* <Link href={"/experiance"}>experiance</Link> */}
      </div>
    </>
  );
}

export default Navbar;
