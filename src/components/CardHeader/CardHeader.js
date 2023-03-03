import './CardHeader.css';


function CardHeader() {

      return (
            <div className='card-header'>
                  <div>
                        <p className='clear-margin-padding current-weather capitalise'><span className='temp'>19°</span>possible light rain</p>
                        <div className='flex gap-5px extra-info'>
                              <div>
                                    <p className='clear-margin-padding upperCase'>humidity</p>
                                    <p className='clear-margin-padding'>47%</p>
                              </div>
                              <hr className='line' />
                              <div>
                                    <p className='clear-margin-padding upperCase'>precipitation</p>
                                    <p className='clear-margin-padding'>5mm</p>
                              </div>
                        </div>
                  </div>
                  <div>
                        <p className='city'>Sydney</p>
                  </div>
            </div>
      )
}

export default CardHeader