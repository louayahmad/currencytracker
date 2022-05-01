import React from 'react'

class Charts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chart: [], 
            isLoaded: false
        };
    }
    componentDidMount() {
        fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=1')
        .then(response => response.json())
        .then(json => {
            this.setState({ 
                chart: json, 
                isLoaded: true
            });
        });
    }

    render(){
        const { isLoaded, chart } = this.state;
        
        if (!isLoaded){
            return <div><p>Not loaded...</p></div>
        }
        else {
            return (
               
                <div>
                    <ul>
                      
                   </ul>
                   

             </div>
            )
        }
    }
}

export default Charts;