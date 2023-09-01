//  icons
import {
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiChevronDown  
} from "react-icons/fi";

import TestiImage1 from './assets/img/girl.png'
import TestiImage2 from './assets/img/man.png'
import TestiImage3 from './assets/img/girl2.png'
import rating from './assets/img/rating 8.png'



// navigation
export const navigation = [
  {
    name: "How it works",
    href: "howitworks",
  },
  {
    name: "Services",
    href: "services",
    icon: <FiChevronDown />,
  },
  {
    name: "Templates",
    href: "contact",
    icon: <FiChevronDown />,
  },
  {
    name: "Pricing",
    href: "pricing",
  },
];

// social
export const social = [
  {
    icon: <FiFacebook />,
    href: "",
  },
  {
    icon: <FiTwitter />,
    href: "",
  },
  {
    icon: <FiLinkedin />,
    href: "",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage2,
    authorText:
      "Breathed new life into my CV! Perfectly showcased my leadership abilities.",
    authorName: "Jonathan Noore",
    authorPosition: rating,
  },
  {
    authorImg: TestiImage1,
    authorText:
      "Stands out! High-quality CVs and helpful interview question suggestions.",
    authorName: "Grace Majokun",
    authorPosition: rating,
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Smooth transition! Emphasized my transferable skills for my new industry.",
    authorName: "Sarah Wonu",
    authorPosition:rating,
  },
];
