import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  // {
  //   label: "About",
  //   items: [
  //     {
  //       label: "Contact",
  //       href: "https://docs.pancakeswap.finance/contact-us",
  //     },
  //     {
  //       label: "Blog",
  //       href: "https://pancakeswap.medium.com/",
  //     },
  //     {
  //       label: "Community",
  //       href: "https://docs.pancakeswap.finance/contact-us/telegram",
  //     },
  //     {
  //       label: "CAKE",
  //       href: "https://docs.pancakeswap.finance/tokenomics/cake",
  //     },
  //     {
  //       label: "—",
  //     },
  //     {
  //       label: "Online Store",
  //       href: "https://pancakeswap.creator-spring.com/",
  //       isHighlighted: true,
  //     },
  //   ],
  // },
  // {
  //   label: "Help",
  //   items: [
  //     {
  //       label: "Customer",
  //       href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
  //     },
  //     {
  //       label: "Troubleshooting",
  //       href: "https://docs.pancakeswap.finance/help/troubleshooting",
  //     },
  //     {
  //       label: "Guides",
  //       href: "https://docs.pancakeswap.finance/get-started",
  //     },
  //   ],
  // },
  // {
  //   label: "Developers",
  //   items: [
  //     {
  //       label: "Github",
  //       href: "https://github.com/pancakeswap",
  //     },
  //     {
  //       label: "Documentation",
  //       href: "https://docs.pancakeswap.finance",
  //     },
  //     {
  //       label: "Bug Bounty",
  //       href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
  //     },
  //     {
  //       label: "Audits",
  //       href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
  //     },
  //     {
  //       label: "Careers",
  //       href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
  //     },
  //   ],
  // },
];

export const socials = [
  {
    label: "LinkedIn",
    icon: "LinkedIn",
    href: "https://www.linkedin.com/in/yantonwirawan/",
  },
  {
    label: "Youtube",
    icon: "Youtube",
    href: "https://www.youtube.com/channel/UCup3mkpvlwwtVtdbPVOPCJA",
  },
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/OfficialSPYNet",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/SPYGlobal",
      },
      {
        label: "Indonesia",
        href: "https://t.me/SPYIndonesia",
      },
      //{
      //  label: "中文",
      //  href: "https://t.me/spy_china",
      //},
      // {
      //   label: "Tiếng Việt",
      //   href: "https://t.me/PancakeSwapVN",
      // },
      //{
      //  label: "India",
      //  href: "https://t.me/SPY_india",
      //},
      // {
      //   label: "русский",
      //   href: "https://t.me/pancakeswap_ru",
      // },
      //{
      //  label: "Turkey",
      //  href: "https://t.me/spy_turkey",
      //},
      // {
      //   label: "Português",
      //   href: "https://t.me/PancakeSwapPortuguese",
      // },
      // {
      //   label: "Español",
      //   href: "https://t.me/PancakeswapEs",
      // },
      // {
      //   label: "日本語",
      //   href: "https://t.me/pancakeswapjp",
      // },
      // {
      //   label: "Français",
      //   href: "https://t.me/pancakeswapfr",
      // },
      // {
      //   label: "Announcements",
      //   href: "https://t.me/PancakeSwapAnn",
      // },
      // {
      //   label: "Whale Alert",
      //   href: "https://t.me/PancakeSwapWhales",
      // },
    ],
  },
  // {
  //   label: "Reddit",
  //   icon: "Reddit",
  //   href: "https://reddit.com/r/pancakeswap",
  // },
  //{
  //  label: "Instagram",
  //  icon: "Instagram",
  //  href: "https://instagram.com/smartypay",
  //},
  // {
  //   label: "Github",
  //   icon: "Github",
  //   href: "https://github.com/smartyindonesia/",
  // },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
