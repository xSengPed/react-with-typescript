import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import './GraphView.css'
am4core.useTheme(am4themes_animated);

class GraphView extends Component {
    chart: any;
    componentDidMount() {
        let chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
        let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
        series.data = [
            {
                name: 'Front-End',
                value: 200,
                children: [
                    {
                        name: 'Basic',
                        value: 100,
                        children: [
                            {
                                name: 'HTML 5',
                                value: 50,
                            },
                            {
                                name: 'Laravel',
                                value: 50,
                            },
                            {
                                name: 'Vue',
                                value: 50,
                            },
                        ],
                    },
                    {
                        name: 'Intermediate',
                        value: 100,
                        children: [
                            {
                                name: 'React',
                                value: 50,
                            },
                        ]
                    },
                    {
                        name: 'Expert',
                        value: 100,
                        children: [
                            {
                                name: 'Flutter',
                                value: 50,
                            },
                        ]
                    },
                ],
            },
            {
                name: 'Back-End',
                value: 200,
                children: [
                    {
                        name: 'Basic',
                        value: 100,
                        children: [
                            {
                                name: 'Node.js',
                                value: 50,
                            },
                            {
                                name: 'Springboot',
                                value: 50,
                            },
                            {
                                name: 'Flask',
                                value: 50,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Other',
                value: 200,
                children: [
                    {
                        name: 'Basic',
                        value: 100,
                        children: [
                            {
                                name: 'Go',
                                value: 50,
                            },
                            {
                                name: 'Php',
                                value: 50,
                            },
                            {
                                name: 'Docker',
                                value: 50,
                            },
                        ],
                    },
                    {
                        name: 'Intermediate',
                        value: 100,
                        children: [
                            {
                                name: 'C',
                                value: 50,
                            },
                            {
                                name: 'Typescript',
                                value: 50,
                            },
                            {
                                name: 'Python',
                                value: 50,
                            },
                            {
                                name: 'Git',
                                value: 50,
                            },
                        ],
                    },
                    {
                        name: 'Expert',
                        value: 100,
                        children: [
                            {
                                name: 'Dart',
                                value: 50,
                            },
                            {
                                name: 'Java',
                                value: 50,
                            },
                            {
                                name: 'Shell',
                                value: 50,
                            },
                        ],
                    },
                ],
            },
        ];

        series.dataFields.linkWith = "linkWith";
        series.dataFields.name = "name";
        series.dataFields.id = "name";
        series.dataFields.value = "value";
        series.dataFields.children = "children";

        series.nodes.template.tooltipText = "{name}";
        series.nodes.template.fillOpacity = 1;

        series.nodes.template.label.text = "{name}"
        series.fontSize = 16;
        series.maxLevels = 2;
        series.maxRadius = am4core.percent(6);
        series.manyBodyStrength = -16;
        series.nodes.template.label.hideOversized = true;
        series.nodes.template.label.truncate = true;
        this.chart = chart;
    }
    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
    render() {
        return (
            <div>
                <div style={{textAlign:'center'}}>
                    <h1><b>PROGRAMING SKILLS</b></h1>
                </div>
                <div id="chartdiv" className='graph-views'></div>
            </div>
        );
    }
}

export default GraphView;
