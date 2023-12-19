const Lists = ({people}) => {
    return (
        <>
    <br />
    <h1 className="text-center mb-2 font-bold">
        {people.map((person)=>{
        const {id, name, image, age} = person
            return (
            <div key={id} className="flex items-center justify-center gap-2 bg-gradient-to-tr from-violet-500 to-violet-700 text-slate-50 p-2 my-1 rounded-md">
                <img className="h-14 rounded-full" key={id} src={image} alt={name} />
                <div className="flex flex-col">
                <h1 className="font-normal">{name}</h1>
                <h2>{age} <span className="font-mono ml-1">years old</span></h2>
                </div>
            </div>
            )
        })}
    </h1>
    </>
  )
}

export default Lists