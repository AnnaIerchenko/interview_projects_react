import Accordeon from './components/accordeon';
import GithubProfileFinder from './components/github-profile-finder';
import ImgSlider from './components/img-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import ModalTest from './components/modal-popup/modal-text';
import QrCodeGenerator from './components/qr-code-generator';
import SearchAutocompete from './components/search-autocomplete';
// import ScrollIndicator from './components/scroll-indicator';

import StarRating from './components/star-rating';

import TreeView from './components/tree-view';
// import menus from './tree-view/data';

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
      {/* <QrCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit-100'}/> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      <SearchAutocompete />
    </div>
  );
}

export default App;
