import { cookies } from "next/headers";
import { ComponentType, ReactNode } from "react";
import {newRequest} from "@/utils/newRequest";
import {UserProvider} from "@/context/UserContext";

interface WrappedComponentProps {
    children?: ReactNode;
}

export function authWrapper<T extends WrappedComponentProps>(Component: ComponentType<T>) {
    return async function WrappedComponent(props: T) {
        let user: any = null;

        try {
            const cookieStore = await cookies();
            const token = cookieStore.get("token")?.value;

            if (!token) throw new Error("Authentication token missing.");

            const response = await newRequest.get("/auth/me", {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status !== 200) throw new Error(`Fetch error! Status: ${response.status}`);
            user = response.data.user;
        } catch (error) {
            console.error("Error fetching user:", error);
        }

        return (
            <UserProvider user={user}>
                <Component {...props} />
            </UserProvider>
        );
    };
}
