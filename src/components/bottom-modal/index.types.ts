
export type TModal = {
    onClose: () => void;
    snapPoint: string[];
    ref: any;
    children: React.ReactNode;
    title: string;
}