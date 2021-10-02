class SuwasewanaPopup{
    constructor(popupContaienr){
        this.container = document.getElementById(popupContaienr);
        this.init();
    }
    init(){        
        // popup contaienr
        let popupContaienr = document.createElement('div');
        popupContaienr.classList.add('popup-container');
        
        // popup
        let popup = document.createElement('div');
        popup.classList.add('popup', 'zoomIn');

        // close btn
        let closeBTN = document.createElement('div');
        closeBTN.classList.add('close-btn');
        closeBTN.innerHTML = '<i data-feather="x"></i>';
        closeBTN.setAttribute("onclick", "popup.hidePopup()" );
        popup.appendChild(closeBTN);
        
         //logo row
         let logo= document.createElement('div');
         logo.classList.add('logo');
         popup.appendChild(logo);
         //logo
         let logo_img=document.createElement('img');
         logo_img.setAttribute("src","logo.png")
         logo.appendChild(logo_img);

        // message
        let popupMessage = document.createElement('div');
        popupMessage.classList.add('popup-message');
        popupMessage.id = "popupMessageContainer";
        popup.appendChild(popupMessage);
        popupContaienr.appendChild(popup);
        this.container.appendChild(popupContaienr);
    }      
    showPatientDetails(data){
        let eventsContaier = document.createElement('div');
        // console.log(data.name);
        let eventDiv = document.createElement('div');
        eventDiv.innerHTML = "<br><h4> Patient Details </h4>";
        eventDiv.innerHTML += "<h5> Name -  " + data.name + " </h5>";
        eventDiv.innerHTML += "<h5> Age - " + data.age + " </h5>";
        eventDiv.classList.add('popup-title');
        eventsContaier.appendChild(eventDiv);
        document.getElementById("popupMessageContainer").replaceChildren(eventsContaier);
        // document.getElementById("popupMessageContainer").appendChild(eventsContaier);
        this.showPopup()
    }
    showclinicDetails(data){
        let details = document.createElement('div')
        let msg=document.createElement('div')
        msg.classList.add('popup-title')
        msg.innerHTML=data.place
        details.appendChild(msg)
        document.getElementById("popupMessageContainer").replaceChildren(details)
        this.showPopup()
    }
    showPopup(){
        this.container.style.display = "block";
    }
    hidePopup(){
        this.container.style.display = "none"; 
    }
}