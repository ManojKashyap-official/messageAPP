(function(){

    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;
  
    var pusher = new Pusher('a6946c269873d90748c4', {
      cluster: 'ap2'
    });
  
    var channel = pusher.subscribe('my-channel');
    document.querySelector('#myForm').addEventListener('submit', addMessage);
    let messages=document.getElementById('messages');
    channel.bind('my-event', newMessages);
    
   
    function newMessages(data){
        console.log(data,'reached');
        let el=document.createElement('div');
        el.innerHTML=data.message+' <small> : '+data.user+' </small>';
        messages.appendChild(el);
  
    }
        
  
        function addMessage(event){ 
            event.preventDefault();
            var data={
                "name":document.getElementById('name').value,
                "message":document.getElementById('message').value,
            }
        console.log(data,'ooooooooooooo');
  
           $.ajax({
               url:'/message',
               method:'POST',
               data:data,
               success:function(data){
                   console.log(data,'cccccccccccccccccc')
               }
           });
           
        }
     
  
  
  
      })();