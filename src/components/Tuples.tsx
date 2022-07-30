const Tuples: React.FC<{ label: string, value: string }> = ({label, value}) => {
    return (
        <div>
            <div className="capitalize text-gray-500 text-sm">{label}</div>
            <div className="">{value}</div>
        </div>
    )
}

export default Tuples