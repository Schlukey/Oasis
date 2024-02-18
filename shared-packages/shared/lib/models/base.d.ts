export interface Base {
    id: string;
    dateCreated: string;
}
export interface BaseFormProps<T> {
    onSubmit: () => void;
    form: T;
}
