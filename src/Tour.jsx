import Poster from "./Poster"
const Tour = ({info}) => {
  return (
    <div className="flex bg-gradient-to-r  from-slate-950 to-slate-800 flex-col p-4">
      {
        info.map(dt=>{
          // const {id, title, poster_path, popularity, genre_ids, backdrop_path, release_date} = dt
           return <Poster key={dt.id} {...dt}/>
        })
      }
    </div>
  )
}

export default Tour