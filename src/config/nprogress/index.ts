import NProgress from 'nprogress';

NProgress.configure({
  easing: 'ease',
  speed: 300,
  showSpinner: true, 
  trickleSpeed: 200, 
  minimum: 0.1, 
});

export default NProgress;
