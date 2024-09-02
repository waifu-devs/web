import Image from 'next/image';
import WaifuLogo from './assets/waifu.png';

const Logo = () => {
    return (
        <div className="flex flex-col logo h-16 w-16 justify-center">
            <Image src={WaifuLogo} alt={'Logo'}></Image>
        </div>

    )
}
export default Logo;