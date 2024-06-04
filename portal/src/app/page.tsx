import Testportal from "./components/Testportal";
import Link from "next/link";
import UploadImage from "./components/UploadImage";

export default function Home() {
  return (
    <main>
      <div>
        <div className="flex text-xs m-4">
          {" "}
          <Link href="/" className="text-stone-300">
            My Portals
          </Link>{" "}
          &nbsp; &gt; &nbsp;
          <Link href="/" className="text-stone-300">
            Portal List
          </Link>{" "}
          &nbsp; &gt; &nbsp;
          <Link href="/" className="text-stone-300">
            Portal Generator
          </Link>{" "}
          &nbsp; &gt; &nbsp;
          <Link href="/">Edit</Link>
        </div>
        <h1 className="font-bold m-4 border-bot pb-2 text-2xl">Edit Portal</h1>
        <Testportal />
        <div className="border-bot mx-4"></div>
        <UploadImage />
      </div>
    </main>
  );
}
