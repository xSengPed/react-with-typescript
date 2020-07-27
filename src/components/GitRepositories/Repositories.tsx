import React, { Component } from 'react';
import './repo.css'
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Collapse } from 'antd'
const { Panel } = Collapse;

AOS.init()
interface RepoState {
    repo: any[]
}

class Repositories extends Component<{}, RepoState>{
    state: RepoState = {
        repo: []
    }
    fetchRepoData = async () => {
        let repo: any = await axios.get(`https://api.github.com/users/KalimaPz/repos`);

        this.setState({
            repo: repo.data
        })
    }
    componentWillMount() {
        this.fetchRepoData();
    }
    render() {
        let { repo } = this.state
        console.log(repo)
        return (

            <div data-aos='fade-up' data-aos-duration='2000'>
                <div id='header-rep' style={{ textAlign: 'center' }}><h1><b>MY CODE REPOSITORIES</b></h1></div>
                <div className='repo-card-area'>
                    <Collapse accordion>
                        <Panel header='Show All' key='1'>
                            <div className='in-collapsed-card-layout'>
                                {
                                    repo.map((rep, index) => {
                                        return (
                                            <div key={index} >
                                                <RepoCard projectName={rep.name} lang={rep.language} projectUri={rep.html_url} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        )
    }
}
interface RepoProps {
    projectName: string,
    lang: string,
    projectUri: string,
}
class RepoCard extends Component<RepoProps>{
    props: RepoProps = {
        projectName: '2',
        lang: '3',
        projectUri: '4'
    }

    render() {
        let { projectName, lang, projectUri } = this.props;
        return (

            <div className='repo-card'>
                <p id='rep-title'><a href={projectUri}>{projectName.toUpperCase()}</a></p>
                <p id='rep-lang'>{lang}</p>
            </div>

        );
    }
}
export default Repositories;