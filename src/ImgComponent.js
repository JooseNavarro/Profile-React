import React, {Component} from 'react';


class Tecnologi extends Component{
  render(){
    return(
      <tec_img className="img_tec">
        <ul>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png"  />
            </li>
            <li>
              <img src="https://camo.githubusercontent.com/7e97b9c10423e06bf6f91e971d8a9cec5926adfe/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667"  />
            </li>
            <li>
             <img src="http://ottawajs.org/logo/OttawaJS.png"  />
           </li>
            <li>
              <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"  />
            </li>
             <li>
              <img src="https://citywebconsultants.co.uk/sites/default/files/inline-images/mongo-medium.png"  />
            </li>
             <li>
              <img src="https://logo-png.com/logopng/postgresql-logo.png"  />
            </li>
          </ul>
      </tec_img>
    )
  }
}

export default Tecnologi;
