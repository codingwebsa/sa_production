"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { Container } from "./container";
import { HamburgerIcon } from "@/icons/hamburger";
import { Logo } from "@/icons/logo";
import classNames from "classnames";

export const Header = () => {
  const [hamburgerMenuIsOpen, setHambugerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHambugerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHambugerMenuIsOpen]);

  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-md" href="/">
          <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> SA.
        </Link>

        <div
          className={classNames(
            "transition-[visibility] md:visible",
            hamburgerMenuIsOpen ? "visible" : "delay-500 invisible"
          )}
        >
          <nav
            className={classNames(
              "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:bg-transparent md:opacity-100 md:translate-x-0",
              hamburgerMenuIsOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            )}
          >
            <ul
              className={classNames(
                "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                "ease-in",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0"
              )}
            >
              <li>
                <Link
                  className="flex h-navigation-height w-full items-center text-md transition-[color,transform] duration-300 md:translate-y-0 md:text-sm hover:text-grey-dark"
                  href="/"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="flex h-navigation-height w-full items-center text-md transition-[color,transform] duration-300 md:translate-y-0 md:text-sm hover:text-grey-dark"
                  href="/"
                >
                  Method
                </Link>
              </li>
              <li className="md:hidden lg:block">
                <Link
                  className="flex h-navigation-height w-full items-center text-md transition-[color,transform] duration-300 md:translate-y-0 md:text-sm hover:text-grey-dark"
                  href="/"
                >
                  Customers
                </Link>
              </li>
              <li className="md:hidden lg:block">
                <Link
                  className="flex h-navigation-height w-full items-center text-md transition-[color,transform] duration-300 md:translate-y-0 md:text-sm hover:text-grey-dark"
                  href="/"
                >
                  Changelog
                </Link>
              </li>
              <li className="md:hidden lg:block">
                <Link
                  className="flex h-navigation-height w-full items-center text-md transition-[color,transform] duration-300 md:translate-y-0 md:text-sm hover:text-grey-dark"
                  href="/"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  className="flex h-navigation-height w-full items-center text-md transition-[color,transform] duration-300 md:translate-y-0 md:text-sm hover:text-grey-dark"
                  href="/"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="flex h-navigation-height w-full items-center text-md transition-[color,transform] duration-300 md:translate-y-0 md:text-sm hover:text-grey-dark"
                  href="/"
                >
                  Company
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center h-full ml-auto">
          <Link className="mr-6 text-sm" href="/">
            Log in
          </Link>
          <Button href="/">Sign up</Button>
        </div>

        <button
          className="ml-6 md:hidden"
          onClick={() => setHambugerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
