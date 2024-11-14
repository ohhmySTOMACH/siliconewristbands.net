"use client";
import { useRouter } from 'next/router'

const SubmitButton = () => {
    const router = useRouter();

    const onSubmitQuote = (data) => {
        let mergedJob = { ...product.defaultJob, ...data }
        setJob(mergedJob)
        //console.log(mergedJob)
        router.push('/order/user-details?p=quote')
    }

    const onSubmitCart = (data) => {
        let mergedJob = { ...product.defaultJob, ...data }
        setJob(mergedJob)
        //console.log(mergedJob)
        router.push('/order/user-details?p=cart')
    }

    return (
        <div>
            {/* <Link href='/order/user-details?p=cart' passHref>
                                <button type="button" onClick={handleSubmit(onSubmitCart)}>Add to Cart</button>
                            </Link>
                            <Link href='/order/user-details?p=quote' passHref>
                                <button type="button" onClick={handleSubmit(onSubmitQuote)}>Get Quote</button>
                            </Link> */}
            <button onClick={handleSubmit(onSubmitCart)}>Add to Cart</button>
            <button onClick={handleSubmit(onSubmitQuote)}>Qet Quote</button>
        </div>
    )
}

export default SubmitButton;