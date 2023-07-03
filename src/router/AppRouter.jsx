// Ruta padre de la aplicación
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { WebRoutes } from "../web/routes/WebRoutes";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<WebRoutes/>}/>
            </Routes>
        </BrowserRouter>
    )
} 

//        <Route path="/otherRouteGroup/*" element={<OtherRouterGroup/>}/>
            