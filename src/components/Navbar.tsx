import WidthWrapper from "./WidthWrapper"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server"

const Navbar = () => {
    return (
        <nav className="sticky h-14  inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <WidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href='/' className="flex z-40 font-semibold">
                        <span>PDF Helper</span>
                    </Link>
                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link 
                                href='/pricing'
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm"
                            })}>
                            Платная подписка
                            </Link>
                            <LoginLink 
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm"
                            })}>
                            Войти
                            </LoginLink>
                            <RegisterLink 
                                className={buttonVariants({
                                    size: "sm"
                            })}>
                            Зарегистрироваться
                            </RegisterLink>
                        </>
                    </div>
                </div>
            </WidthWrapper>
        </nav>
    )
}

export default Navbar