import {
  AdjustmentsHorizontalIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  FaceSmileIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Elevate Your Training Experience",
  desc: "Greenfield camps combine expert-led running and cycling sessions with the stunning backdrop of Northern Portugal. Discover how our tailored programs can boost your performance.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Personalized Coaching",
      desc: "Train with experienced coaches who adapt sessions to your goals.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Performance Boost",
      desc: "Structured workouts designed to enhance speed and endurance.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Community Vibes",
      desc: "Connect with fellow athletes in an inspiring group setting.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Beyond Training: A Full Experience",
  desc: "Our camps offer more than just workouts. Enjoy nutritious meals and explore Northern Portugal’s breathtaking landscapes, all included in your package.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Healthy Nutrition",
      desc: "Fuel your body with meals crafted for peak athletic performance.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Scenic Adventures",
      desc: "Guided tours of Portugal’s northern trails and landmarks.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "All-Season Access",
      desc: "Join us year-round with camps tailored to every season.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
