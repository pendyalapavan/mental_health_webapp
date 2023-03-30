import './Products.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import {Container, Button} from 'react-bootstrap'
function RedirectButton({ url }) {
    const handleClick = (event) => {
      event.preventDefault();
      window.location.href = url;
    };
  
    return (
      <Button className='mb-2' onClick={handleClick}>View</Button>
    );
  }

function Products(){

    return(
        
        <Container>
            <h1 className = 'text-center mt-4'>OUR PRODUCTS</h1>
            <div className="d-flex row justify-content-between">
                <div className="m-4 card 'p-3' col-xs-1 col-sm-2 col-md-3 border border-4">
                    <img className = 'mx-auto pt-4' width = '200' height='300' src="https://m.media-amazon.com/images/I/519w1NOx7oL._SX322_BO1,204,203,200_.jpg" alt=""/>
                    <p className="text-center"><b>Chemical Khichdi:</b> How I Hack My Mental Health</p>
                    <h5 className='text-center' ><b>Price</b> : ₹300</h5>   
                    <RedirectButton url="https://www.amazon.in/Chemical-Khichdi-Hacked-Mental-Health/dp/0143454358/ref=sr_1_1_sspa?keywords=mental+health+books&qid=1656147682&sprefix=mental+health+%2Caps%2C234&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE1NVJUQkdSTEpJSlEmZW5jcnlwdGVkSWQ9QTA2Mzk2NjYzNjgzSTZPVEY4VzZIJmVuY3J5cHRlZEFkSWQ9QTA0Mjk4NDMxQ0w1T1FSMjM1NzFUJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==" />
                </div>
    
                <div className="m-4 card 'p-3' col-xs-1 col-sm-2 col-md-3 border border-4">
                    <img className = 'mx-auto pt-4' width = '200' height='300' src="https://m.media-amazon.com/images/I/51H3CjSkPXL._SY450_.jpg" alt=""/>
                    <p className="text-center">Yogarise Anti-Skid Yoga Mat with Carry Bag</p>
                    <h5 className='text-center' ><b>Price</b> : ₹500</h5>   
                    <RedirectButton url="https://www.amazon.in/Yogarise-Exercise-Workout-Flooring-Women/dp/B08RB5TTX1/ref=sr_1_19?keywords=yoga%2Bmat&qid=1674999259&sr=8-19&th=1" />
                </div>
                
                <div className="m-4 card 'p-3' col-xs-1 col-sm-2 col-md-3 border border-4">
                    <img className = 'mx-auto pt-4' width = '200' height='300' src="https://m.media-amazon.com/images/I/51aK+6Ood6L._SX362_BO1,204,203,200_.jpg" alt=""/>
                    <p className=" text-center">A Guide to Mental Health & Psychiatric Nursing</p>
                    <h5 className='text-center' ><b>Price</b> : ₹500</h5>   
                    <RedirectButton url="https://www.amazon.in/Guide-Mental-Health-Psychiatric-Nursing/dp/9352500474/ref=sr_1_3?keywords=mental+health+books&qid=1656147682&sprefix=mental+health+%2Caps%2C234&sr=8-3" />
                    
                </div>
            </div>
            <div className="d-flex row justify-content-between">
                <div className="m-4 card 'p-3' col-xs-1 col-sm-2 col-md-3 border border-4">
                    <img className = 'mx-auto pt-4' width = '200' height='300'src="https://m.media-amazon.com/images/I/51b4nIEIPcS._SX324_BO1,204,203,200_.jpg" alt=""/>
                    <p className="text-center">No Straight Thing Was Ever Made: Essays</p>
                    <h5 className='text-center' ><b>Price</b> : ₹500</h5>   
                    <RedirectButton url="https://www.amazon.in/Straight-Thing-Was-Ever-Made/dp/0670091596/ref=sr_1_1?crid=234WYAPJ4V4XO&keywords=No+Straight+Thing+Was&qid=1656156919&sprefix=no+straight+thing+was+%2Caps%2C294&sr=8-1" />
                   
                </div>
    
                <div className="m-4 card 'p-3' col-xs-1 col-sm-2 col-md-3 border border-4">
                    <img className = 'mx-auto pt-4'  width = '200' height='300' src="https://m.media-amazon.com/images/I/41Ei3uY4T1L._SX316_BO1,204,203,200_.jpg" alt=""/>
                    <p className="text-center">Maybe You Should Talk To Someone</p>
                    <h5 className='text-center' ><b>Price</b> : ₹400</h5>
                    <RedirectButton url="https://www.amazon.in/Maybe-You-Should-Talk-Someone/dp/9389143519/ref=sr_1_1_sspa?crid=1I096DFVQCFFN&keywords=maybe+you+should+talk+to+someone&qid=1656156958&sprefix=maybe%2Caps%2C311&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzRzBSOUdVMjRCRTk4JmVuY3J5cHRlZElkPUEwNzEwNTk3QjVZSDBDTUVMR0dQJmVuY3J5cHRlZEFkSWQ9QTA2MzU5NjlHNVZWRUhESFlPUksmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl" />
                </div>
                
                <div className="m-4 card 'p-3' col-xs-1 col-sm-2 col-md-3 border border-4">
                    <img className = 'mx-auto pt-4' width = '200' height='300' src="https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg" alt=""/>
                    <p className="text-center">Atomic Habits: The life-changing million copy bestseller</p>
                    <h5 className='text-center' >Price : ₹350</h5>   
                    <RedirectButton url="https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834/ref=sr_1_2?crid=1HNW2E4LUWYK7&keywords=atomic+habits&qid=1656157073&sprefix=a%2Caps%2C238&sr=8-2" /> 
                </div>
            </div>
        </Container>
    )
}

export default Products