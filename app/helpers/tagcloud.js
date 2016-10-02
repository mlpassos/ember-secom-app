import Ember from 'ember';

export function tagcloud([value]) {
  let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  let res = '';
  if (w>768) {
  	res = w / 500;	
  } else {
  	res = w / 100;
  }
  
  console.log(res);
  let out = value*res;

  if (out <= 10) {
  	out *=2;
  }
  return Ember.String.htmlSafe(out);
}

export default Ember.Helper.helper(tagcloud);