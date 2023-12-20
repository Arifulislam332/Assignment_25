// intersection observer-->API

/* const targetEl = document.querySelector(".target2");

const option = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

const callBackFn = (entries) => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "blue";
  }
};

const observerOption = new IntersectionObserver(callBackFn, option);

observerOption.observe(targetEl); */


const getTarget = document.querySelector('.target');
const header = document.querySelector('.header__add')

const observer = new IntersectionObserver((entries)=>{
  const findEntry = entries[0];

  if(findEntry.isIntersecting){
    header.classList.add('sticky');
  }else{
    header.classList.remove('sticky');
  }
},{
  root:null,
  rootMargin:"0px",
  threshold:0.3,
})

observer.observe(getTarget);