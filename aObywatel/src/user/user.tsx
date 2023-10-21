import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { User } from "../defines/user";

// TODO: wrap whole app with this provider
export const ProvideUserLocalStoarge = (props: { children?: ReactNode }) => {
    const { children } = props
    const [uid, setUid] = useState<string | null>(null)
    useEffect(() => {
        const list = () => {
            const ldUid = window.localStorage.getItem("uid")
            setUid(ldUid || null)
        }

        list()

        addEventListener("storage", list);
        return () => {
            removeEventListener("storage", list);
        }
    }, [])
    return <UserIdContext.Provider value={uid}>
        {children}
    </UserIdContext.Provider>
}

export const UserIdContext = createContext<string | null>(null)
export const useUserId = () => useContext(UserIdContext)
export const loginUser = (id: string | null) => {
    window.localStorage.setItem("uid", id || "")
}

export const userUserData = (): User | null => {
    const uid = useUserId()
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:9125/api/user/${uid}`)
            const js = await res.json()
            setUser(js)
        })();

    }, [uid])

    return user
}