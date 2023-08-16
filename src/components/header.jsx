import Logo from '../images/world.png'
export default function header() {
  return (
    <div>
      <div className='flex justify-center bg-red-400 py-2'>
      <div className='flex flex-row'>
            <img src={Logo} alt="" className='w-12 h-12' />
            <span className='pt-2 font-bold text-white text-xl ml-2'>My Travel Blog</span>
        </div>
      </div>
        
    </div>
  )
}
