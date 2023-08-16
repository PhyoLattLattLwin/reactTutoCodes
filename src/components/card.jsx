import Mount from '../images/mount.jpg'
export default function card(props) {
  return (
    <>
        <div className='grid grid-cols-2 mt-10'>
            <div className=''>
                <img src={props.image} alt="" className='w-26 h-40 rounded-lg'/>
            </div>
            <div className='text-left flex flex-col'>
                <span>{props.title}</span>
                <span>{props.location}</span>
                <span>{props.googleMapsUrl}</span>
                <span>{props.startDate}</span>
                <span>{props.endDate}</span>
                <span>{props.description}</span>
            </div>
        </div>
    </>
  )
}
