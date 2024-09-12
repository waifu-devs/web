import Header from "@/components/Header";
import Image from 'next/image';
import Waifu from '../components/assets/giphy.webp';
import { HeroHighlightDemo } from "@/components/Highlight";
import { Separator } from "@/components/ui/separator"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <Header/>
        <div className="flex flex-col items-center">
        <HeroHighlightDemo/>
        <Image src={Waifu} alt={'Cosa'} />
        </div>
    </main>
  );
}
