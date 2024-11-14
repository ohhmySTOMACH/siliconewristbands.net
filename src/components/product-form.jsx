"use client";
import { useForm, useFieldArray } from "react-hook-form"
import VariationHandler from "@/components/variation-handler";
import OrderSummary from "@/components/order-summary";
import styles from '@/app/order/id.module.css'
import { useRouter } from 'next/navigation'

export default function ProductForm(props) {
    const product = props.product;

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

    const {
        register,
        setValue,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({ shouldUnregister: false, defaultValues: props.product })

    const { fields, replace } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "variations", // unique name for your Field Array
        keyName: "faux_id"
    });

    console.log("Log - defaultJob", product.defaultJob)

    return (
        <>
            <form className={styles.form}>
                <h1>{product ? product.name : "No Product"}</h1>
                {
                    fields.map((field, index) => (
                        <div key={field.faux_id}>
                            <VariationHandler variation_field={product?.independentVariationFields[index]} name={`variations[${index}].value`} control={control} />
                        </div>
                    ))
                }
                <div>
                    <h3>Additional Comments</h3>
                    <input defaultValue="" {...register("additional_comments")} />
                </div>

                <div>
                    <h3>Quantity</h3>
                    <input defaultValue="" {...register("quantity", { required: true, min: product && product.minimum })} />
                </div>

                <div>
                    <button onClick={handleSubmit(onSubmitCart)}>Add to Cart</button>
                    <button onClick={handleSubmit(onSubmitQuote)}>Qet Quote</button>
                </div>
            </form>
            {
                product &&
                <OrderSummary control={control} defaultJob={product.defaultJob} />
            }
        </>
    );
}
