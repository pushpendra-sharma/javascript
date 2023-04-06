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

const grandParentDiv = document.getElementById('grandparent');
const parentDiv = document.getElementById('parent');
const childDiv = document.getElementById('child');

function childClickHandler() {
  console.log('Child clicked');
}

function parentClickHandler() {
  console.log('Parent clicked');
}

function grandParentClickHandler() {
  console.log('Grandparent clicked');
}

/** In case of mix, first capturing then bubbling */

/**
 *   Event Bubbling, passing the third argument as false(default)
 *
 * - Clicking on the child element prints
 *    Child clicked
 *    Parent clicked
 *    Grandparent clicked
 *
 * - Clicking on the parent element prints
 *    Parent clicked
 *    Grandparent clicked
 *
 */
grandParentDiv.addEventListener('click', grandParentClickHandler);
parentDiv.addEventListener('click', parentClickHandler);
childDiv.addEventListener('click', childClickHandler);

/**
 *    Event capturing, passing the third argument as true
 *
 * - Clicking on the child element prints
 *    Grandparent clicked
 *    Parent clicked
 *    Child clicked
 *
 *
 * - Clicking on the parent element prints
 *    Grandparent clicked
 *    Parent clicked
 *
 */
grandParentDiv.addEventListener('click', grandParentClickHandler, true);
parentDiv.addEventListener('click', parentClickHandler, true);
childDiv.addEventListener('click', childClickHandler, true);
