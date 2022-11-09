import ModuleRoutes from "./ModuleRoutes"

interface PublicRouter extends ModuleRoutes {
    isProtected: false
}

export default PublicRouter