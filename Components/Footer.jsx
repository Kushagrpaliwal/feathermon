import Image from "next/image"

const Footer = () => {
  return (
    <div className="bg-black1 overflow-hidden h-auto sm:h-[250px] p-5 sm:p-10">
      <div className="flex flex-col sm:flex-row items-center sm:pl-[100px] h-auto sm:h-[100px] p-5">
        <div className="flex flex-col sm:flex-row w-full items-center sm:items-start">
          <div className="z-10">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
          </div>
          <p className="font-bold text-2xl mt-2 text-white sm:relative ">Weathermon</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Image src="/github.svg" alt="social" width={45} height={45} />
        </div>
      </div>
      <div className="flex w-full justify-center mt-5 sm:mt-10">
        <p className="font-light text-white text-center">
          © 2024 Weathermon. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
