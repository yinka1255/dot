
import {doGet} from '../utils';

async function getBallotData() {
    try{
      const res = await doGet("api/getBallotData")
      return new Promise((resolve) => {
        resolve(res);
      })
    }
    catch(error){
      throw(error, 'eerr')
    }  
}
export {getBallotData}
