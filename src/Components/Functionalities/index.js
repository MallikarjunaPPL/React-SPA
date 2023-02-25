
import './index.css';
import FormPage from "../ReactFun/FormPage/formpage";
import Function from "../ReactFun/Function/function";
import Armstrong from "../ReactFun/Armstrong/armstrong";
import Palindrome from "../ReactFun/Palindrome/palin";
import Reverse from "../ReactFun/Reverse/reverse"
const App=()=> {
  return (
    <>
    <div className="border_sty">
   
    <FormPage/>
    <Function/>
    <Armstrong/>
    <Palindrome/>
    <Reverse/>
    </div>
    </>
  );
}

export default App;
