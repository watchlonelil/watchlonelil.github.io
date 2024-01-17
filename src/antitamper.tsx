import { Separator } from "./components/ui/separator";

import projector from "@/assets/projector-white.svg";

export default function AntiTamper() {
  return (
    <main className="h-screen w-screen bg-[#CD1932] p-8">
      <Separator className="bg-white" />
      <div className="apy-16 flex h-full w-full flex-col items-center justify-center gap-8">
        <img src={projector} className="" width={150} height={150} alt="Logo" />
        <h1 className="text-center text-4xl font-bold uppercase">
          Tampering Detected
        </h1>
        <h2 className="text-center text-xl font-bold uppercase">
          Developer Tools Usage Detected
        </h2>
        <p className="text-center uppercase">
          Unauthorized activity has been detected. Your actions have been logged
          and this incident will be reported. Please refrain from using
          developer tools while in the application.
        </p>
      </div>

      <Separator className="fixed bottom-8 w-[calc(100vw-64px)] bg-white" />
    </main>
  );
}
