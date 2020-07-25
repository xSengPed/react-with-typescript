import React ,{Component}from 'react';

interface detailProps {
    title : string,
    position : string,
    duration : string,
}
class ExperianceCard extends Component<detailProps>{
    props:detailProps = {
        title : '',
        position : '',
        duration : '',
    }
    render(){
        return(
            <div>
                {this.props.title}
                {this.props.position}
            </div>
        ) 

        
    }
}
export default ExperianceCard;