const User : React.FC< {name: string, email?: string} > = ( {name, email}) => {
    return (
        <div className="grid-row justify-center items-center flex gap-2 border-b bg-white text-gray-900 rounded-full w-8 h-8">
            <div className="grid-item">{name}</div>
            {email && <div className="grid-item">{email}</div>}
        </div>
    );
}

export default User