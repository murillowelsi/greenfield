"use client";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-green-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-green-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "What’s included in a Greenfield camp package?",
    answer:
      "Each package includes expert-led running and cycling training sessions, nutritious meals tailored for athletes, and guided tours of Northern Portugal’s scenic landscapes.",
  },
  {
    question: "Who can join the training camps?",
    answer:
      "Our camps are designed for both amateur and professional athletes looking to improve their skills in running or cycling, regardless of experience level.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "If you need to cancel, contact us within 30 days of your booking for a full refund, or within 15 days for a 50% refund. No refunds are available after that period.",
  },
  {
    question: "Do you provide equipment or accommodation?",
    answer:
      "We don’t provide equipment like bikes or running gear, but accommodation options are included in select packages. Check the camp details or contact us for more info.",
  },
];
