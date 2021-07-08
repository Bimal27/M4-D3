import MyNavBar from './component/MyNavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import WarningSign from './component/WarningSign';
import MyBadge from './component/MyBadge';
import SingleBook from './component/Singlebook';
import BookList from './component/BookList';
import books from './data/fantasy.json'

function App() {
  return (
    <div>
      <MyNavBar />
      <WarningSign text="Hey, nice to see you"/>
      <MyBadge text ="This is badge.." color="success"/>
      <SingleBook book={books[0]} />
      <BookList books={books} />
    </div>
  )
}

export default App;
