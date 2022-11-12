import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "../components"
import { Home, Sobre, Talks } from "../pages"

interface IPagesData {
    to: string
    label: string
    element: JSX.Element
    onClick?: () => void
}

export const pages: IPagesData[] = [
    {
        label: 'Home',
        to: '/',
        element: <Home />
    },
    {
        label: 'Talks',
        to: '/talks',
        element: <Talks />
    },
    {
        label: 'Sobre',
        to: '/sobre',
        element: <Sobre />
    }
]
export const Rotas = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {pages.map((page) => (
                        <Route key={page.to} path={page.to} element={page.element} />
                    ))}

                    <Route path="*" element={<Navigate to='/' />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}