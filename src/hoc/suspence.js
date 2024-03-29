import React from "react";
import Preloader from "../Components/common/Preloader/preloader";

export const withSuspense = (Component) => (props) => {
    return (
        <React.Suspense fallback={<Preloader />}>
            <Component {...props} />
        </React.Suspense>
    )
}