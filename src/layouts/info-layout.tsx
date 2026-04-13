interface Props {
    children: React.ReactNode;
}

export const InfoLayout = ({ children }: Props) => {
    return (
        <>
            <div className="py-25">
                {children}
            </div>
        </>
    );
};
