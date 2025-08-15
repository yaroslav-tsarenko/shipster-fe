export const MAIN_FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL
export const DASHBOARD_FRONTEND_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL

export const handleNav = (url: string) => {
    window.location.href= `${DASHBOARD_FRONTEND_URL}${url}`;
}

