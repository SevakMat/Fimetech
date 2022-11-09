import ModuleRoutes from "./ModuleRoutes"

interface ProtectedRoute extends ModuleRoutes {
    isProtected: true
}

export default ProtectedRoute