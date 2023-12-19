import { MdOutlineFormatQuote } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaStar } from "react-icons/fa";
const Poster = ({id, title, poster_path, popularity, genre_ids, backdrop_path, release_date, overview}) => {
  return (
    <div className="flex gap-1 mt-4 bg-[#fff4] rounded-md p-4">
      <div className="flex items-center justify-center">
        <img className="h-[300px] object-cover rounded-md hover:scale-[1.05] transition-transform " src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      </div>
      <div className="w-[15rem]">
        <h1 className="ml-2 mb-[.7rem]"><u className="font-bold text-slate-950">Title :</u> <span className="text-slate-50">{title}</span></h1>
        <h1 className="ml-2"><u className="font-bold text-slate-950">Descritpion :</u> <span className="text-slate-50"><MdOutlineFormatQuote className="rotate-180 text-yellow-600" />{overview}<MdOutlineFormatQuote className="text-yellow-600" /></span></h1>
        <h1 className="ml-2"><u className="font-bold text-slate-950">Popularity :</u> <FaStar className="text-yellow-400" /><span className="relative top-[-1.25rem] left-[1.2rem]">{popularity}</span></h1>
        <h1 className="ml-2"><u className="font-bold text-slate-950">Release date :</u> <MdDateRange/> <span className="relative top-[-1.25rem] left-[1.2rem] text-slate-200">{release_date.replaceAll("-", "/")}</span></h1>
      </div>
    </div>
  )
}

export default Poster
