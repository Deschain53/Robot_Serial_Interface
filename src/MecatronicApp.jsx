import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/AppTheme"

export const MecatronicApp = () => {
    return (
        <>
            <AppTheme>
                <AppRouter/>
            </AppTheme>
        </>
    )
}