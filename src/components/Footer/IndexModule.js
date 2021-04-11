//- Module that will return refreshed data of the three Indices 

const fmp = require('financialmodelingprep')('c494c521ea2b5688b838372418d58fd2')

function refreshIndex() {

        const indices = {
                DOW: {
                        price: 0, 
                        previousClose: 0, 
                        change: 0
                }, 
                NAS: {
                        price: 0, 
                        previousClose: 0, 
                        change: 0
                },
                SP: {
                        price: 0, 
                        previousClose: 0, 
                        change: 0
                }
        }; 

        // DOW JONES INDUSTRIAL AVERAGE
        fmp.market.index.quote("^DJI").then(response => {
                        indices["DOW"].price = response[0].price
                        indices["DOW"].change = response[0].changesPercentage
                        indices["DOW"].previousClose = response[0].previousClose
                });
     
        
        // S&P 500
        fmp.market.index.quote("^GSPC").then(response => {
                indices["SP"].price = response[0].price
                indices["SP"].change = response[0].changesPercentage
                indices["SP"].previousClose = response[0].previousClose
        });
        
        // NASDAQ
        fmp.market.index.quote("^IXIC").then(response => {
                indices["NAS"].price = response[0].price
                indices["NAS"].change = response[0].changesPercentage
                indices["NAS"].previousClose = response[0].previousClose
        });

        return indices; 
}
  
export default refreshIndex; 