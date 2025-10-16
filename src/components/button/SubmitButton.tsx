import { useFormStatus } from "react-dom";
type SubmitButtonProps = {
    action: (formData: FormData) => Promise<void>;
    label: string;
    className?: string;
};
export function SubmitButton({ action, label, className = "" }: SubmitButtonProps) {
    const { pending } = useFormStatus();

    return (
        <button className={className} formAction={action} disabled={pending}  >
            {pending ? "Loading…" : label}
        </button>
    );
}