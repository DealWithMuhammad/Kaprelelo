import { Dialog, Transition } from "@headlessui/react";
import React from "react";

export default function CommonModa() {
  return (
    <Transition.Root as={Fragment}>
      <Dialog as="div" className={"relative z-10"}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-900"
          enterForm="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-900"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        </Transition.Child>
      </Dialog>
      <div className="fixed inset-0 overflow-hidden"></div>
    </Transition.Root>
  );
}
