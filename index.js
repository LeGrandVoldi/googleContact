let image = document.getElementById('les_images');
let nombre_contacts = document.getElementById('nombre_contacts');

    setTimeout(() => {
        image.style.backgroundImage = 'url(https://ssl.gstatic.com/social/contactsui/images/emptycontacts/emptycontacts_animation_cell1.png)';
        image.style.opacity = "1";
    }, 300);
    setTimeout(() => {
        image.style.backgroundImage = 'url(https://ssl.gstatic.com/social/contactsui/images/emptycontacts/emptycontacts_animation_cell3.png)';
    }, 1000);
    setTimeout(() => {
        image.style.backgroundImage = 'url(https://ssl.gstatic.com/social/contactsui/images/emptycontacts/emptycontacts_animation_cell4.png)';
    }, 1800);


