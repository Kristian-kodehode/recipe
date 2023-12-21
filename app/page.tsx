import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-myPrimary">Hello Recipe mini project</h1>
      <h2 className="text-mySecondary">This will be fun</h2>
      <div className="bg-default absolute top-0 right-0 bottom-0 left-0 bg-cover bg-center h-screen -z-10 opacity-10"></div>
    </div>
  );
}
