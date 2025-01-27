console.log('ok');

function followers_co(num) {
    if (num >= 1_000_000_000) {
        return (num / 1_000_000_000).toFixed(1) + "B"; // Billions
      } else if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1) + "M"; // Millions
      } else if (num >= 1_000) {
        return (num / 1_000).toFixed(1) + "K"; // Thousands
      } else {
        return num.toString(); // Less than 1K
      }
}

const profile={
    profile_img: "wp6409639.jpg",
    user_id:"vivek_rvt",
    post_cont:1233,
    followers:3108001,
    followings:112,
    blueTick:true,
    UserName:"Vivek Rawat",
    atTherate_id:"@vivek_rvt",
    job:"Software Engineer",
    discription:"I am a Web Developer. i am 17 years old",
    follow:false,
}

const p_img = document.querySelector(".profile-img img");
const userid = document.querySelector('.userName');
const Follow_btn = document.querySelector('.follow-btn');
const posts = document.querySelector('.posts');
const followers = document.querySelector('.followers');
const followings = document.querySelector('.following');
const userName = document.querySelector('.p_userName');
const atTherate_id = document.querySelector('.p_atetherate_id');
const job = document.querySelector('.P_job');
const descripton = document.querySelector('.description');
const blueTick = '<img src="bluetick.svg" alt="">';
p_img.src = profile.profile_img;
userid.innerHTML = profile.user_id;
if (profile.follow == true) {
    Follow_btn.innerHTML = "Following";
    Follow_btn.addEventListener("click",()=>{
        profile.follow = !profile.follow; // Toggle follow state
        // Follow_btn.style.backgroundColor = "red"; // Change background color
      
        if (profile.follow == true) {
          Follow_btn.innerHTML = "Following";
        } else {
          Follow_btn.innerHTML = "Follow";
        }
    })
}
else{
    Follow_btn.innerHTML = "Follow";
    Follow_btn.addEventListener("click",()=>{
        profile.follow = !profile.follow; // Toggle follow state
        // Follow_btn.style.backgroundColor = "red"; // Change background color
      
        if (profile.follow == true) {
          Follow_btn.innerHTML = "Following";
        } else {
          Follow_btn.innerHTML = "Follow";
        }
    })
}

if(profile.blueTick == true){
    userid.innerHTML = profile.user_id+blueTick;

}
else{
    userid.innerHTML = profile.user_id;
}
posts.innerHTML = followers_co(profile.post_cont)+" posts";
followers.innerHTML = followers_co(profile.followers) + " Followers";
followings.innerHTML = followers_co(profile.followings)+" Following" ;
userName.innerHTML = profile.UserName;
atTherate_id.innerHTML = profile.atTherate_id;
job.innerHTML = profile.job;
descripton.innerHTML = profile.discription;

