import Link from "next/link";
import { Container } from "./container";
import { GithubIcon } from "@/icons/github";
import { Logo } from "@/icons/logo";
import { SlackIcon } from "@/icons/slack";
import { TwitterIcon } from "@/icons/twitter";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "" },
      { title: "Integrations", href: "" },
      { title: "Pricing", href: "" },
      { title: "Changelog", href: "" },
      { title: "Docs", href: "" },
      { title: "Linear Method", href: "" },
      { title: "Download", href: "" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "" },
      { title: "Blog", href: "" },
      { title: "Careers", href: "" },
      { title: "Customers", href: "" },
      { title: "Brand", href: "" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "" },
      { title: "Contact", href: "" },
      { title: "DPA", href: "" },
      { title: "Terms of service", href: "" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "" },
      { title: "Status", href: "" },
      { title: "GitHub", href: "" },
    ],
  },
];

export const Footer = () => (
  <footer className="mt-12 border-t border-white-a08 py-[5.6rem] text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex flex-row justify-between h-full lg:flex-col">
          <div className="flex items-center text-grey">
            <Logo className="w-4 h-4 mr-4" /> SA Production - Designed worldwide
          </div>
          <div className="flex mt-auto space-x-4 text-grey">
            <TwitterIcon />
            <GithubIcon />
            <SlackIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
            key={column.title}
          >
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li className="" key={link.title}>
                  <Link
                    className="block mb-3 text-grey hover:text-white transition-colors duration-300"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
