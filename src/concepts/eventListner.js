/*
    - Closure with event listner
        - attatchEventListner is a closure 
        - it remembers count value

    - scope demo in event listner

    - garbage collection & remove event listner
        - event listners are heavy, we need to remove when not in use

    - bubbleUp

    - trickleDown
 */

function attatchEventListner() {
  let count = 0;
  document.getElementById('clickMe', function xyz() {
    console.log('Button clicked', ++count);
  });
}

attatchEventListner();
