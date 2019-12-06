import React from 'react';
import './app.scss';
import './fonts/fonts.css';
import $ from 'jquery';
import { TweenMax } from 'gsap/dist/gsap';
import './loader.css';
import BackgroundImg from './img/png/minified/bg.png';
import Background from './components/Background';
import MountainsImg from './img/png/minified/mountains.png';
import Mountains from './components/Mountains';
import TreesImg from './img/png/minified/trees.png';
import Trees from './components/Trees';
import BackgroundImageOnLoad from 'background-image-on-load';
import Spinner from './components/spinner';





class App extends React.Component {

  // Setting state to false
  state = {
    bgIsLoaded: false
  };

  // JQUERY Parallax hover effect for the header
  componentDidMount(){
		$('html').mousemove(function(e){
		
			var wx = $(window).width();
			var wy = $(window).height();
			
			var x = e.pageX - this.offsetLeft;
			var y = e.pageY - this.offsetTop;
			
			var newx = x - wx/2;
			var newy = y - wy/2;
			
			$('span').text(newx + ", " + newy);
			
			$('#wrapper div').each(function(){
				var speed = $(this).attr('data-speed');
				if($(this).attr('data-revert')) speed *= -1;
				TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
				
			});
			
		});
	}
  render() {
    // Setting a constant variable for the state
    const { bgIsLoaded } = this.state;
    // creating a variable to adjust wether spinner is shown or not
    var SpinnerHandler = '';

    // conditional statement to check wether the state has been updated from the image load
    if((this.state.bgIsLoaded === true)) {
      SpinnerHandler = 'hidden'
    } else {
      SpinnerHandler = ''
    };
    return (

      <React.Fragment>
        <div className={SpinnerHandler}>
          <Spinner />
        </div>
        
        <div id="container">
          <section id="wrapper">
            <Background
              src={bgIsLoaded ? BackgroundImg : ''}
            />
            <Mountains
              src={bgIsLoaded ? MountainsImg : ''}
            />
            <Trees
              src={bgIsLoaded ? TreesImg : ''}
            />            
              <p className="heading text-bold" data-speed="0">Bespoke websites</p>
              <p className="subheading text-light" data-speed="0">Freelance web developer and mentor</p>
          </section>
          <div className="rebuildContainer">
              <p className="text" data-speed="0">Currently undergoing a rebuild</p>
              <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
        </div>

        {/* Using the import to set a src image to be checked for load | adjusting state once loaded */}
        <BackgroundImageOnLoad
            src={BackgroundImg}
            onLoadBg={() =>
              this.setState({
              bgIsLoaded: true
            })}
            onError={err => console.log('error', err)}
          />
        </React.Fragment>
        
    );
  }
}

export default App;
