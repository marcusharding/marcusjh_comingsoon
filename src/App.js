import React from 'react';
import './app.scss';
import './fonts/fonts.css';
import $ from 'jquery';
import { TweenMax } from 'gsap/dist/gsap';
import { Icon } from 'semantic-ui-react';
import './loader.css';

class App extends React.Component {
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
    return (
      <div id="container">
        <section id="wrapper">
          <div className="p1" data-speed="0.01" data-revert="true"></div>
          <div className="p2" data-speed="0.02"></div>
          <div className="p3" data-speed="0.01"></div>
            <p className="heading text-bold" data-speed="0">Bespoke websites</p>
            <p className="subheading text-light" data-speed="0">Freelance web developer and mentor</p>
        </section>
        <div className="rebuildContainer">
            <p className="text" data-speed="0">Currently undergoing a rebuild</p>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
	    </div>
        
    );
  }
}

export default App;
