function showSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'flex'
}
function hideSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'none'
}
let circleprogress = document.querySelector(".circle_progress"),
progresscount = document.querySelector(".progress_count");

let progressStartValue = 0,
    progressEddValue = 75,
	speed = 19.5;

let progress = setInterval(() => {
	progressStartValue++;

	progresscount.textContent =`${progressStartValue}%`
	circleprogress.style.background = `conic-gradient(#99399b ${progressStartValue *3.6}deg, #e5dede 0deg)`

	if(progressStartValue == progressEddValue){
		clearInterval(progress);
	}
}, speed);


let circleprogress1 = document.querySelector(".circle_progress1"),
progresscount1 = document.querySelector(".progress_count1");

let progressStartValue1 = 0,
    progressEddValue1 = 65,
	speed1 = 24;

let progress1 = setInterval(() => {
	progressStartValue1++;

	progresscount1.textContent =`${progressStartValue1}%`
	circleprogress1.style.background = `conic-gradient(#99399b ${progressStartValue1 *3.6}deg, #e5dede 0deg)`

	if(progressStartValue1 == progressEddValue1){
		clearInterval(progress1);
	}
}, speed1);

let circleprogress2 = document.querySelector(".circle_progress2"),
progresscount2 = document.querySelector(".progress_count2");

let progressStartValue2 = 0,
    progressEddValue2 = 45,
	speed2 = 32.5;

let progress2 = setInterval(() => {
	progressStartValue2++;

	progresscount2.textContent =`${progressStartValue2}%`
	circleprogress2.style.background = `conic-gradient(#99399b ${progressStartValue2 *3.6}deg, #e5dede 0deg)`

	if(progressStartValue2 == progressEddValue2){
		clearInterval(progress2);
	}
}, speed2);

const video = document.querySelector(".about__left video");

video.addEventListener("mouseenter", () => {
	video.play();
});
video.addEventListener("mouseleave", () => {
	video.pause();
});