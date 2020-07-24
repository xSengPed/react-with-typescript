import React, { Component } from 'react';
import axios from 'axios'
import { Divider } from 'antd';

interface RepoState {
    repo : any[]
}
class Repositories extends Component <{},RepoState>{
    state : RepoState = {
        repo : []
    }
    fetchRepoData = async () => {
        let repo: any  = await axios.get(`https://api.github.com/users/KalimaPz/repos`);

        this.setState({
            repo : repo.data
        })
    }
    componentWillMount() {
        this.fetchRepoData();
    }
    render(){
        let {repo} = this.state
        console.log(repo)
        return(
            <div>
                <div><Divider>MY REPOSITORIES</Divider></div>
                <div>
                    {
                        repo.map((rep,index)=>{
                            return (
                            <div>{rep.name}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

class RepoCard extends Component {
    render(){
        return(
            <div>
                
            </div>
        );
    }
}
export default Repositories;