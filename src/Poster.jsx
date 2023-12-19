import { MdOutlineFormatQuote } from "react-icons/md";
const Poster = ({id, title, poster_path, popularity, genre_ids, backdrop_path, release_date, overview}) => {
  return (
    <div className="flex gap-1 mt-4 bg-[#fff4] rounded-md p-4">
      <div className="">
        <img className="h-[300px] object-cover rounded-md hover:scale-[1.05] transition-transform " src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      </div>
      <div className="w-[15rem]">
        <h1 className="ml-2"><u className="text-slate-950">Title :</u> <span className="text-slate-50">{title}</span></h1>
        <h1 className="ml-2"><u className="text-slate-950">Descritpion :</u> <span className="text-slate-50"><MdOutlineFormatQuote className="rotate-180" />{overview}<MdOutlineFormatQuote /></span></h1>
      </div>
    </div>
  )
}

export default Poster
