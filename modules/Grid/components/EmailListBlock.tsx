import { FiMail } from "react-icons/fi";
import { Block } from "./Block";

export const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Send us your review</p>
    <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
      <input
        type="email"
        placeholder="Enter your review"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Send review
      </button>
    </form>
  </Block>
);
