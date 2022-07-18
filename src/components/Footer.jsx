import {
  Facebook,
  YouTube,
  LinkedIn,
  CameraAlt,
  Twitter,
} from "@mui/icons-material";

function Footer() {
  return (
    <footer className="mt-20 bg-footer-bg border flex flex-col space-y-4 items-center pt-28 pb-3 px-5 w-full text-sm md:text-xl md:w-[50%] mx-auto rounded-t-[310px]">
      <div className="text-gray-300 space-x-6 flex justify-center items-center ">
        <YouTube className="text-white text-4xl" />
        <LinkedIn className="text-4xl" />
        <Facebook className=" text-4xl" />
        <LinkedIn className="text-4xl" />
        <CameraAlt className="text-4xl" />
        <Twitter className="text-4xl" />
      </div>

      <div className="flex space-x-12 text-gray-400">
        <p>Terms of services</p>
        <p>Privacy policy</p>
      </div>

      <div className="text-gray-400">
        <p>Copyright 2021 @Peddle Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
