import React,{Component} from 'react'
import './MenuBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger, faGithub, faInstagramSquare, faGitlab } from '@fortawesome/free-brands-svg-icons'
class MenuBar extends Component {
    render(){
        return(
            <div className='menu-frame'>
                <div className='menu-items'>
                    <div><a href='https://gitlab.com/kalima007c/'><FontAwesomeIcon size='2x' icon={faGitlab} id='icon-gitlab' className='link'/></a></div>
                    <div><a href='https://github.com/KalimaPz/'><FontAwesomeIcon size='2x' icon={faGithub} id='icon-github' className='link'/></a></div>
                    <div><a href='https://m.me/phone.dnk'><FontAwesomeIcon size='2x' icon={faFacebookMessenger} id='icon-fbmessenger' className='link'/></a></div>
                    <div><a href='https://www.instagram.com/Iphone.coepk/'><FontAwesomeIcon size='2x' icon={faInstagramSquare} id='icon-instagram' className='link'/></a></div>       
                </div>
            </div>
        )
    }
}

export default MenuBar
