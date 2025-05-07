import Image from 'next/image'
import Container from 'components/Container'
import Search from './Search'
import Nav from './Nav'
import Button from 'components/Button'
import tranveloLogo from 'public/assets/travelo-logo-header.png'
const Header = () => {
    return (
        <header className="h-[85px] bg-white shadow-lg p-4">
            <Container>
                <div className="flex justify-between item-center">
                    <div className="flex">
                        <Image
                            src={tranveloLogo}
                            alt="Travelo Logo"
                            placeholder="blur"
                            height="48"
                            width="182"
                        />
                        <Search />
                    </div>
                    <div className="flex gap-5">
                        <Nav />
                        <Button className="w-[190px]">
                            Masuk
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    )

}
export default Header