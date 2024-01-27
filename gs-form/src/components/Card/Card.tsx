interface Props {
    children: React.ReactNode
}

function Card ({ children }: Props) {
    return <>
        <section className="w-[350px] max-w-full max-h-full bg-[#f5f6f9] rounded-xl shadow-md p-8 transition-all">
            {children}
        </section>
    </>
}

export default Card