import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/example" element={<Example />} /> */}
                
                <Route path="*" element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}