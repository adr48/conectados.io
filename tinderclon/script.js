const profiles = [
    { name: "Randy", bio: "Amante del brawl", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbrawlstars.fandom.com%2Fwiki%2FEdgar&psig=AOvVaw24VUGS--PIWNNDGZK2qj5J&ust=1724470628891000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKipou6XiogDFQAAAAAdAAAAABAE", whatsapp: "https://wa.me/1234567890" },
    { name: "viktor", bio: "Me duele la espalda y me gusta la D.", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.marca.com%2Ftiramillas%2Fmusica%2F2022%2F12%2F31%2F63afefece2704eee278b45af.html&psig=AOvVaw3aX5z-gUxymRuuisCDc_0Z&ust=1724470670930000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjOvY6YiogDFQAAAAAdAAAAABAE", whatsapp: "https://wa.me/0987654321" }
    // Puedes agregar más perfiles aquí
];

let currentProfileIndex = 0;

function loadProfile() {
    const profile = profiles[currentProfileIndex];
    document.getElementById('profile-image').src = profile.image;
    document.getElementById('profile-name').innerText = profile.name;
    document.getElementById('profile-bio').innerText = profile.bio;
}

function handleLike() {
    const profile = profiles[currentProfileIndex];
    window.location.href = profile.whatsapp;
}

function handleDislike() {
    currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
    loadProfile();
}

document.getElementById('like-button').addEventListener('click', handleLike);
document.getElementById('dislike-button').addEventListener('click', handleDislike);

loadProfile();





