<style>
</style>

<button id="test">Notify me {name}! {count}</button>

<script>
  let count = 0;
  export let name;
  function sum() {
    count++;
  }
  
  
  //Sending notifications through browser.
  window.addEventListener('load', function () {
    const button = document.getElementById('test');
    button.addEventListener('click', function () {
      sum();
      new Notification("Hi! " + count);
    });
  });
</script>