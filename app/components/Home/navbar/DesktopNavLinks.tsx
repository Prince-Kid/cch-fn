import Link from "next/link";
export default function DesktopNavLinks() {
  return (
    <ul className=" flex flex-row space-x-6">
      <li className="text-xl hover:text-blue-900 hover:font-semibold">
        <Link href="/">Home</Link>
      </li>
      <li className="text-xl hover:text-blue-900 hover:font-semibold">
        <Link href="/">Home</Link>
      </li>
      <li className="text-xl hover:text-blue-900 hover:font-semibold">
        <Link href="/">Home</Link>
      </li>
      <li className="text-xl hover:text-blue-900 hover:font-semibold">
        <Link href="/">Home</Link>
      </li>
      <li className="text-xl hover:text-blue-900 hover:font-semibold">
        <Link href="/">Home</Link>
      </li>
    </ul>
  );
}
