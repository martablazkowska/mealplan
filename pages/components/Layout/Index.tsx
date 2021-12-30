import { FC } from 'react'

interface Props {
    children: any
}

const Layout: FC<Props> = ({ children }) => {
    const a = 'awewe'
    return (
        <div>
            wefr
            <div>Nav </div>
            {children}
        </div>
    )
}

export default Layout
