import { FC } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import styled, { createGlobalStyle } from 'styled-components'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import GlobalStyles from './globalStyle'
import LayoutStyled from './styles'

interface Props {
    children: any
}

const Layout: FC<Props> = ({ children }) => {
    Router.events.on('routeChangeStart', () => NProgress.start())
    Router.events.on('routeChangeComplete', () => NProgress.done())
    Router.events.on('routeChangeError', () => NProgress.done())

    return (
        <LayoutStyled>
            <GlobalStyles />
            <div className="Logo">Meals</div>
            <nav>
                <ul>
                    <li className="item1">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="item2">
                        <Link href="/meals">Meals</Link>
                    </li>
                    <li className="item3">{/* <Link></Link> */}</li>
                </ul>
            </nav>
            <div className="InnerWrapper">{children}</div>
        </LayoutStyled>
    )
}

export default Layout
