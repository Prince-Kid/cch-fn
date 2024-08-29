import Link from "next/link";
import logo from "../../../../public/images/logo.jpg";
import Image from "next/image";
export default function LogoLink() {
  return (
    <div className="mb-4 text-center sm:mb-0">
      <Link href="/">
        <Image src={logo} alt="Logo" width={100} height={100} />
      </Link>
    </div>
  );
}
