import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./components/Home/HomePage";

export default function Home() {
  return (
    <>
     <HomePage/>
    </>
  );
}
