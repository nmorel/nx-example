import { HTMLAttributes } from "react";

export const Button = (props: HTMLAttributes<HTMLButtonElement>) => {
    return <button data-kind="button" type="button" {...props} />
}