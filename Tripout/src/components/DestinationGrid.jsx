const DestinationGrid = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 py-10 px-6 md:px-10 xl:px-44">
        <div className="w-9/12 h-[450px]">
            <img className='cursor-pointer h-full w-full rounded-2xl object-cover object-left hover:object-center group-hover:brightness-90 transition-all duration-500 ease-in-out' src="https://media.istockphoto.com/id/1327346980/photo/view-of-diamond-beach-tropical-beach-in-bali.jpg?s=612x612&w=0&k=20&c=ntrPbctGWf7yDgYdvEPnzQ7u0aOW-hNblt7heX1ZFYU=" alt="" />
        </div>
        <div className="grid grid-cols-1 gap-4 w-1/3">
            <div>
                <img className='cursor-pointer h-full w-full rounded-2xl object-cover object-left hover:object-center group-hover:brightness-90 transition-all duration-500 ease-in-out' src="https://media.istockphoto.com/id/1370346385/photo/amazing-mountain-ridge-view-from-the-mannlichen-station-grindelwald-switzerland.jpg?s=612x612&w=0&k=20&c=GUD6Lf3JeHR_u-2lxlyr665iig91ZsMJOqgAJR6WNn8=" alt="" />
            </div>
            <div className='grid grid-cols-2 gap-3'>
                <img className='cursor-pointer h-full w-full rounded-2xl object-cover object-left hover:object-center group-hover:brightness-90 transition-all duration-500 ease-in-out' src="https://media.istockphoto.com/id/475124388/photo/white-church-in-oia-town-on-santorini-island-in-greece.jpg?s=612x612&w=0&k=20&c=_0Hy2MgqVTE2qCtyU8-0_zTZSnib7cCSmp2y2T9Mrw4=" alt="" />
                <img className='cursor-pointer h-full w-full rounded-2xl object-cover object-left hover:object-center group-hover:brightness-90 transition-all duration-500 ease-in-out' src="https://media.istockphoto.com/id/1154761064/photo/the-palm-island-panorama-with-dubai-marina-in-the-background-aerial.jpg?s=612x612&w=0&k=20&c=CypnNYt7O98dz20Vogn4IOhJD79nTFBMRC8pH4Ddgd0=" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationGrid