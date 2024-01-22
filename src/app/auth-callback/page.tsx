import { useRouter, useSearchParams } from "next/navigation"
import { trpc } from "../_trpc/client"
import { useEffect } from "react"

const Page = async () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')
    const {data, isLoading} = trpc.authCallback.useQuery(undefined)

    useEffect(() => {
        if (!isLoading && data) {
          router.push(origin ? `/${origin}` : "/dashboard");
        }
    }, [data, isLoading, origin, router]);
}

export default Page