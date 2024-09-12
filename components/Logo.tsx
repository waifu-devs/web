import Image from 'next/image';
import WaifuLogo from './assets/waifu.png';

const Logo = () => {
    return (
        <div className="flex flex-col logo h-10 w-10 justify-center">
            <Image src={WaifuLogo} alt={'Logo'} />
        </div>

    )
}
export default Logo;