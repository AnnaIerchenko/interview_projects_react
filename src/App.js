import Accordeon from './components/accordeon';
import ImgSlider from './components/img-slider';
import LoadMoreData from './components/load-more-data';
import QrCodeGenerator from './components/qr-code-generator';

import StarRating from './components/star-rating';
import TreeView from './tree-view';
import menus from './tree-view/data';

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
      {/* <LoadMoreData /> */}
      {/* <TreeView /> */}
      <QrCodeGenerator />
    </div>
  );
}

export default App;
