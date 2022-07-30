const Tuples: React.FC<{ label: string, value: string, classes?: string[] }> = ({label, value, classes}) => {
    return (
        <div className={classes && classes.join(' ')}>
            <div className="capitalize text-gray-500 text-sm">{label}</div>
            <div className="">{value}</div>
        </div>
    )
}

export default Tuples