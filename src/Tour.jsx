import Poster from "./Poster"
const Tour = ({info}) => {
  return (
    <div className="flex bg-gradient-to-tl  from-violet-700 to-violet-500 flex-col p-4">
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