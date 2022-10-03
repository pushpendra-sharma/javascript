var length = 4;
function callback() {
  console.log(this.length);
}
const object = {
  length: 5,
  method(callback) {
    callback();
  },
};
object.method(callback, 1, 2); // 4 is logged

// implicit binding

var ask = {
  teacher: 'Bot',
  who: function () {
    console.log(this.teacher); // Bot
  },
};

ask.who();

// explicit binding - call, apply, bind

function ask() {
  console.log('ask', this.mentor);
}

var mentor1 = {
  mentor: 'Bot1',
};

ask.call(mentor1);
