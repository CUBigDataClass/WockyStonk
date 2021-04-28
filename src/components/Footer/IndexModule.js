//- Module that will return refreshed data of the three Indices 

import { getNodeText } from '@testing-library/react';

const fmp = require('financialmodelingprep')('87be07589903e92ab00528eba1a994a8')

function refreshIndex() {
        
        const indices = {
                DOW: {
                        name: "DOW",
                        index: -1, 
                        previousClose: 299, 
                        change: 10
                }, 
                NAS: {
                        name: "NASDAQ",
                        index: -11, 
                        previousClose: 300, 
                        change: -2.5
                },
                SP: {
                        name: "S&P500",
                        index: -111, 
                        previousClose: 300, 
                        change: 1
                }
        }; 

        //- will get errors and default to values above because amount of api calls per day
        // DOW JONES INDUSTRIAL AVERAGE
        fmp.market.index.quote("^DJI").then(response => {
                        indices["DOW"].index = response[0].price
                        indices["DOW"].change = response[0].changesPercentage
                        indices["DOW"].previousClose = response[0].previousClose
        }).catch(err => {
                console.log(err); 
        });

        // S&P 500
        fmp.market.index.quote("^GSPC").then(response => {
                indices["SP"].index = response[0].price
                indices["SP"].change = response[0].changesPercentage
                indices["SP"].previousClose = response[0].previousClose
        }).catch(err => {
                console.log(err);
        });
        
        // // NASDAQ
        fmp.market.index.quote("^IXIC").then(response => {
                indices["NAS"].index = response[0].price
                indices["NAS"].change = response[0].changesPercentage
                indices["NAS"].previousClose = response[0].previousClose
        }).catch(err => {
                console.log(err);
        });

        return indices; 
}
  
export default refreshIndex; 