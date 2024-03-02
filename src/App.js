import Accordeon from './components/accordeon';
import ImgSlider from './components/img-slider';
import LoadMoreData from './components/load-more-data';

import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* <Accordeon /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImgSlider 
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"4"}
      /> */}
      <LoadMoreData />
    </div>
  );
}

export default App;
