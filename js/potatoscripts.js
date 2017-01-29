$( document ).ready(function() {
    console.log( "Ready!" );
	var url = $(location).attr('href');
	
	$('#static_audio')[0].volume = 0.2;
	
	var regExp = /^.*(?:(?:\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
	var match = url.match(regExp);
	
	var video_id = "";
	
	if (match && match[1].length == 11) {
		console.log("Video ID: " + match[1]);
		video_id = match[1];
	} else {
		video_id = "0_7WwPkqqvA";
	}
	
	$('<iframe>', {
		src: 'http://www.youtube.com/embed/' + video_id + '?vq=small&controls=0&disablekb=0&showinfo=0&fs=0&modestbranding=1&playsinline=1&rel=0&autoplay=1',
		id:  'video_iframe',
		frameborder: 0
	}).appendTo('#video_wrapper');
	
	(function play_static(){
		$('#potato_tv_static').fadeToggle().delay(600).fadeToggle();
		$('#static_audio')[0].play();
		var random_num = randomIntFromInterval(10,30) * 1000;
		setTimeout(play_static, random_num);
	})();
});

function randomIntFromInterval(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}