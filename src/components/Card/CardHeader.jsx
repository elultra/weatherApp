function CardHeader() {
      return (
            <div className='pt-20 pb-10 px-16 flex justify-between bg-[#003366] rounded-t-lg'>
                  <div>
                        <p className='text-lg text-white capitalize font-semibold'><span className='text-[80px] text-white'>19°</span>possible light rain</p>
                        <div className='gap-6 w-full mx-auto flex jusity-center items-center text-white pt-5'>
                              <div>
                                    <p className='uppercase font-semibold'>humidity</p>
                                    <p>47%</p>
                              </div>
                              <hr className='h-[40px] bg-white w-[1px]' />
                              <div>
                                    <p className='uppercase font-semibold'>precipitation</p>
                                    <p>5mm</p>
                              </div>
                        </div>
                  </div>
                  <div className="flex flex-col justify-center self-start">
                        <p className='text-white text-3xl font-bold tracking-wider'>Sydney</p>
                        <hr className="w-full h-[2px] bg-white mt-0.5"/>
                  </div>
            </div>
      )
}

export default CardHeader;