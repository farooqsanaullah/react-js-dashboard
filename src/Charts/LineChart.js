import React from 'react';
import {Line} from 'react-chartjs-2';

function LineChart ()
{
    const data = {
        labels:['Jan','Feb','Mar','Apr','May'],
        datasets:[{
            
            label:'Sales for 2020 (M)',
            data:[3,2,3,1,5],
            borderColor:['#3E345F'],
            backgroundColor:'#3E345F',
            pointBackgroundColor:'#3E345F',
            pointBorderColor:'#3E345F'             
        },
        {
            label:'Sales for 2019 (M)',
            data:[1,3,2,2,3],
            borderColor:['#BC6777'],
            backgroundColor:'#BC6777',
            pointBackgroundColor:'#BC6777',
            pointBorderColor:'#BC6777'  
        }
    
    
    
    ]
    }

    const options = {
             title:{
                 display:true,
                 text:'Line Chart'
             },
             scales:
             {
                 yAxes:[
                     {
                         ticks:{
                             min:0,
                             max:6,
                             stepSize:1
                         }
                     }
                 ]
             }
    }
    return <Line data={data} options={options} />
}

export default LineChart