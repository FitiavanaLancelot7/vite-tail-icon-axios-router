
import loader from './assets/loader.gif'
const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='mt-[7rem]'>
          <div className="font-bold text-slate-50 text-center font-rubik">Loading ...</div>
          {/* <a className="hidden" href='www.google.com'>Lien</a> */}
          <img className='h-[15rem]' src={loader} alt="loading" />
        </div>
    </div>
  )
}

export default Loading