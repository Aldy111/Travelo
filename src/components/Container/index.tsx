import { ReactNode } from "react"
type Props = {
    children: ReactNode
    size?: string
}
const Container = ({ children,size = 'xl' }: Props) => {
    return (
        <div className={`${size === 'xl' ? 'max-w-screen-xl' : 'max-w-screen-lg'
            } mx-auto`}>
            {children}
        </div>
    )
}
export default Container