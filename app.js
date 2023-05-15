
var form = document.querySelector('#entermessage');
var chatsection = document.querySelector('.chatsection');
// var menu = document.querySelector('#n');
// var menu_section = document.querySelector('#btn1st');





const userImage = "https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"


users = []

form.addEventListener('submit',function(e){
    e.preventDefault()
    let message_value = form.message.value;
    form.message.value = ''
    let date = new Date();
    let date_value = `${ date.getHours()} : ${date.getMinutes()} | ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}  `
    // db.collection("musthu").add({
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    // })
    // .then((docRef) => {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch((error) => {
    //     console.error("Error adding document: ", error);
    // });
   let message_obj = {

          messsage_itum:message_value,
          iscommitted: false,
          userrImage:userImage,
          userrname : 'muhammed',
          date : date_value,
          delete:'delete',
          



    }
    addnewchatmessage(message_obj);
    users.push(message_obj);
  
    // addmessagelocalstorage();
    // for(let i = 0 ; i <users.length; i++){
    //     if(users[i].main === message.main){
    //         users[i].iscommitted = false;
    //         addmessagelocalstorage();
    //         break;
    //     }}

    
})  

function addnewchatmessage(message){

    // elaments

    let main = document.createElement('div');
    let imgwrapper = document.createElement('div');
    let imgprofile = document.createElement('img');
    let textwrapper = document.createElement('div');
    let user_name = document.createElement('p');
    let user_message = document.createElement('h4');
    let user_time = document.createElement('small');
    let message_dot_open = document.createElement('div');
    let message_dot_close = document.createElement('div');
    let dltbtn =document.createElement('button');

    // value

    imgprofile.src = message.userrImage;
    user_name.innerText = message.userrname;
    user_message.innerText = message.messsage_itum;
    user_time.innerText = message.date;
    dltbtn.innerText = message.delete;
    message_dot_open.innerHTML ='<i class="ri-more-line">';
    message_dot_close.innerHTML ='<i class="ri-close-line">';

   

    // class

    main.classList.add('single-chat');
    imgwrapper.classList.add('chat-profile');
    imgprofile.classList.add('avatar');
    textwrapper.classList.add('chat-wrapper','chat-wrap-two');
    message_dot_open.classList.add('side-bar-open');
    message_dot_close.classList.add('side-bar-close');
    dltbtn.classList.add('dtl');
    
    // console.log(dltbtn);

    // append

    imgwrapper.append(imgprofile);
    textwrapper.appendChild(user_name);
    textwrapper.appendChild(user_message);
    textwrapper.appendChild(user_time);
    textwrapper.appendChild(message_dot_open);
    textwrapper.appendChild(message_dot_close);

    main.appendChild(imgwrapper);
    main.appendChild(textwrapper);
    main.appendChild(dltbtn);
    

    // main appent top
    chatsection.append(main);
    

  

    message_dot_open.addEventListener('click',function(e){
         dltbtn.style.display ='block';
         message_dot_close.style.display = 'block';
         message_dot_open.style.display = 'none'
         
    })

    message_dot_close.addEventListener('click',function(e){
        dltbtn.style.display = 'none';
        message_dot_close.style.display = 'none';
        message_dot_open.style.display = 'block';
    })
    
    dltbtn.addEventListener('click',function(e){
       let message_delete_con = confirm('are you sure delete your message')
       if(message_delete_con){
        main.remove();
        for(let i = 0 ; i <users.length; i++){
            if(users[i].main === message.main){
                users.splice(i,1);
                addmessagelocalstorage();
                break;
            }
        }
       }
    })

     console.log
     
    textwrapper.addEventListener('click',function(e){
        
        if(textwrapper.classList.contains('chat-wrap-two')){
            textwrapper.classList.remove('chat-wrap-two');
            for(let i = 0 ; i <users.length; i++){
                if(users[i].main === message.main){
                    users[i].iscommitted = false;
                    addmessagelocalstorage();
                    break;
                }
                
            }
        }
        else{
            textwrapper.classList.add('chat-wrap-two');
            for(let i = 0 ; i <users.length; i++){
                if(users[i].main === message.main){
                    users[i].iscommitted = true;
                    addmessagelocalstorage();
                    break;
                }
            }
        }
    });
// console.log(iscommitted)

  
    




   chatsection.scrollTop = chatsection.scrollHeight;

   



    
}

function addmessagelocalstorage(){
    localStorage.setItem('message',JSON.stringify(users))
}
// console.log(addmessagelocalstorage)
// // chooseImage()



































//  function addchats(val){
//     let item = document.createElement('div')
//     let profile = document.createElement('div')
//     let username = document.createElement('p')
//     let message = document.createElement('h4')
//     // let date = document.createElement('small')
    
//     message.innerText = val.item;
//     date.innerText = date_value
//     profile.innerHTML = userImage

//     profile.classList.add('avatar')
//     item.classList.add('chat-wrapper')
    

//     item.appendChild(message)
//     item.appendChild(date)
//     messagedt.appendChild(item)
//     profiledt.appendChild(profile)

//     mainchats.appendChild(profiledt)
//     mainchats.appendChild(messagedt)
//     modelchat.appendChild(mainchats)

    

//  }