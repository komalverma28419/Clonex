// import {
// //   Github,
//   Linkedin,
//   Twitter,
//   Instagram,
// } from "lucide-react";

import { FaLinkedin, } from "react-icons/fa6";
import { BsTwitter, BsGithub, BsInstagram  } from "react-icons/bs";

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Product", href: "#product" },
      { name: "Testimonial", href: "#testimonial" },
    ]
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", href: "#faq" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Services", href: "#" },
    ]
  },
  {
    title: "Our Works",
    links: [
        {name: "Pricing", href: "#price"},
        {name: "Customer", href: "#customer"},
        {name: "Product", href: "#product"},

    ]
  }
]

export const socialLinks = [
  {
    icon: BsGithub,
    href: "https://github.com/",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/",
  },
  {
    icon: BsTwitter,
    href: "https://twitter.com/",
  },
  {
    icon: BsInstagram,
    href: "https://instagram.com/",
  },
];