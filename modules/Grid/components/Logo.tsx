import Image from "next/image";

export const Logo = () => {
    return (
      <div className="flex justify-center items-center mb-6">
        <Image src="/Logo.png" alt="logo" width={60} height={60} />
      </div>
    );
  };