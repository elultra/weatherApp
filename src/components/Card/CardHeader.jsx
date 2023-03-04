function CardHeader() {
      return (
            <div className='p-[50px] flex justify-between bg-indigo-900 rounded-t-lg'>
                  <div>
                        <p className='text-[16px] text-white space-[3px] capitalize'><span className='text-[80px] text-white'>19°</span>possible light rain</p>
                        <div className='gap-2 max-w-[230px] m-auto flex jusity-center items-center text-white'>
                              <div>
                                    <p className='uppercase'>humidity</p>
                                    <p>47%</p>
                              </div>
                              <hr className='h-[40px] bg-white w-[1px]' />
                              <div>
                                    <p className='uppercase'>precipitation</p>
                                    <p>5mm</p>
                              </div>
                        </div>
                  </div>
                  <div className="flex flex-col justify-center self-start">
                        <p className='text-white text-[20px] font-bold space-1 mr-[20px]'>Sydney</p>
                        <hr className="w-full h-[2px] bg-white"/>
                  </div>
            </div>
      )
}

export default CardHeader;