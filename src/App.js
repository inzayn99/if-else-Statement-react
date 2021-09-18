import React from 'react';
import Amazon from './amazon';
import Netflix from './Netflix';


const favSeries = 'amazon';

const FavS = () => {
if(favSeries === 'netflix'){
  return<Netflix/>;

}else{
  return<Amazon/>;
}
};

const App = () => (
  <>
  <h1 className="heading_style">List Of Top 4 Netflix Series</h1>
<FavS />
  </>
);

export default App;
